import { CategoryIndex } from '../core/classes';
import { Data } from "../core/types";

export type DamageType = Data & {
  description: string;
};

export const DamageTypes = new CategoryIndex<DamageType>({
  "Physical": [
    {
      "name": "Darkness",
      "description": "Dark Powers"
    },
    {
      "name": "Energy",
      "description": "Acid, Energy, and Laser Powers"
    },
    {
      "name": "Fire",
      "description": "Fire Powers"
    },
    {
      "name": "Force",
      "description": "Force Field, Gravity, Web, and Wind Powers"
    },
    {
      "name": "Ice",
      "description": "Ice Powers"
    },
    {
      "name": "Lightning",
      "description": "Electric Powers"
    },
    {
      "name": "Luminous",
      "description": "Luminous Powers"
    },
    {
      "name": "Physical",
      "description": "Archery, Claws, Earth, Firearms, Martial Arts, Shapeshifter, Shields, Spines, Street Justice, Super Strength, and Weapon Powers"
    },
    {
      "name": "Water",
      "description": "Water Powers"
    }
  ],
  "Non-Physical": [
    {
      "name": "Poison",
      "description": "Bio, Poison, and Radiation Powers"
    },
    {
      "name": "Psychic",
      "description": "Mind and Psychic Powers"
    },
    {
      "name": "Sonic",
      "description": "Sonic Powers"
    }
  ]
});
