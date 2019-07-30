import { CategoryIndex } from './collection';
import { Data } from './data';

export type PowerSet = Data & {
  primary: boolean;
  secondary: boolean;
}

export const PowerSets = new CategoryIndex<PowerSet>({
  "Control": [
    {
      "name": "Darkness Control",
      "primary": true,
      "secondary": false
    },
    {
      "name": "Earth Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Electric Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Fire Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Gravity Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Ice Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Illusion Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Magnetism",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Mind Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Plant Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Time Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Water Control",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Wind Control",
      "primary": false,
      "secondary": false
    }
  ],
  "Melee": [
    {
      "name": "Claws",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Darkness Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Dual Weapon Fighting",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Earth Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Electric Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Energy Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Fire Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Ice Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Luminous Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Martial Arts",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Psionic Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Radiation Melee",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Shield Offense",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Spines",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Street Fighting",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Super Strength",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Titan Weapon Fighting",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Weapon Fighting",
      "primary": false,
      "secondary": false
    }
  ],
  "Minions": [
    {
      "name": "Beasts",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Demons",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Mercenaries/Soldiers",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Necromancy",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Ninjas",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Robots",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Thugs",
      "primary": false,
      "secondary": false
    }
  ],
  "Range": [
    {
      "name": "Acid Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Archery",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Assault Rifle",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Darkness Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Dual Pistols",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Electric Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Energy Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Fire Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Ice Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Laser Rifle",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Luminous Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Psychic Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Radiation Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Sonic Scream",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Water Blast",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Web Shooter",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Wind Blast",
      "primary": false,
      "secondary": false
    }
  ],
  "Support": [
    {
      "name": "Dark Miasma",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Devices/Gadgets",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Empathy",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Force Fields",
      "primary": true,
      "secondary": true
    },
    {
      "name": "Ice Domination",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Kinetics",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Leadership",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Nature Affinity",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Pain Domination",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Poisons",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Radiation Emission",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Size Manipulation",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Sonic Resonance",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Thermal Radiation",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Time Manipulation",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Trick Archery",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Weather Manipulation",
      "primary": false,
      "secondary": false
    }
  ],
  "Tank": [
    {
      "name": "Bio Armor",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Dark Shroud",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Earth Armor",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Elasticity",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Electric Armor",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Energy Aura",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Fire Aura",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Ice Armor",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Invulnerability",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Luminous Aura",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Ninjitsu",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Radiation Aura",
      "primary": true,
      "secondary": true
    },
    {
      "name": "Regeneration",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Shield Defense",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Super Reflexes",
      "primary": false,
      "secondary": false
    },
    {
      "name": "Willpower",
      "primary": false,
      "secondary": false
    }
  ]
});
