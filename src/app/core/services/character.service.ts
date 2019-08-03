import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Character } from 'src/app/model/character';
import { Repository } from 'src/app/model/repository';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public current = new BehaviorSubject<Character>(Repository.get(Character)[0] || new Character());
}
