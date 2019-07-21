
import { Index } from '../data/collection';
import { Data } from '../data/data';
import { compose } from './functions';
import { jsonMember, jsonArrayMember } from 'typedjson';
import { IJsonMemberOptions } from 'typedjson/js/typedjson/json-member';
import { IJsonArrayMemberOptions } from 'typedjson/js/typedjson/json-array-member';

export function jsonDataMember<T extends Data>(
  data: Index<T>, options?: IJsonMemberOptions
): PropertyDecorator {
  options = (options || {});
  options.deserializer = compose(options.deserializer || ((v: T) => v), (value: T) => {
    if (value) {
      return data.byName[value.name];
    }

    return value;
  });

  return jsonMember(options);
};

export function jsonDataArrayMember<T extends Data>(
  data: Index<T>, options?: IJsonArrayMemberOptions
): PropertyDecorator {
  options = (options || {});
  options.serializer = (values: T[]) => values.map(v => v.name);
  options.deserializer = (values: string[]) => {
    if (values) {
      return values.map(v => data.byName[v]);
    }

    return values;
  };

  return jsonArrayMember(String, options);
};
