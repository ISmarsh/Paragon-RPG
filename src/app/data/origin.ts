import { Data } from './data';

export interface Origin extends Data {
  proficiencyCount: number;
  proficiencyOptions: string[];
  languages: string[];
  equipment: string[];
  // attack: 
}

export const Origins: Origin[] = [
  {
    "name": "Alien",
    "description": "Your powers came from an Alien source outside of Earth. Whether they took over your body, live in symbiosis with you, or simply gifted you inhuman powers.",
    "proficiencyCount": 3,
    "proficiencyOptions": [
      "Acrobatics",
      "Bluff",
      "Climb",
      "Disarm",
      "Hack",
      "Intimidation",
      "Investigation",
      "Lift",
      "Perception",
      "Resolve",
      "Stealth",
      "Technology",
      "Throw"
    ],
    "languages": [
      "Alien"
    ],
    "equipment": [
      "Alien Artifact",
      "Cell Phone",
      "Costume",
      "Power Based Armaments",
      "Set of Basic Clothes"
    ]
  },
  {
    "name": "Magic",
    "description": "Your powers came from a Magical source. Whether imbuing you with powers from a mystic artifact, a curse/pact, or a magical being.",
    "proficiencyCount": 3,
    "proficiencyOptions": [
      "Ancient History",
      "Arcana",
      "Bluff",
      "Concentration",
      "Diplomacy",
      "Disarm",
      "Investigation",
      "Lockpick",
      "Pickpocket",
      "Religion",
      "Resolve",
      "Stealth"
    ],
    "languages": [
      "Mystic"
    ],
    "equipment": [
      "Cell Phone",
      "Costume",
      "Mystic Tome",
      "Power Based Armaments",
      "Set of Fancy Clothes"
    ]
  },
  {
    "name": "Mutation",
    "description": "Your powers came inherently from a Mutation in your genes and developed over time.",
    "proficiencyCount": 3,
    "proficiencyOptions": [
      "Acrobatics",
      "Animal Handling",
      "Balance",
      "Climb",
      "Concentration",
      "Insight",
      "Investigation",
      "Lift",
      "Perception",
      "Pop Culture",
      "Pull/Push",
      "Stealth",
      "Throw",
      "Tracking"
    ],
    "languages": [
      "Foreign"
    ],
    "equipment": [
      "Cell Phone",
      "Costume",
      "Genetic Tools",
      "Power Based Armaments",
      "Set of Basic Clothes"
    ]
  },
  {
    "name": "Natural",
    "description": "Your powers are completely natural and acquired through skill and training.",
    "proficiencyCount": 4,
    "proficiencyOptions": [
      "Acrobatics",
      "Balance",
      "Climb",
      "Concentration",
      "Insight",
      "Investigation",
      "Lift",
      "Perception",
      "Persuasion",
      "Pull/Push",
      "Quips",
      "Resolve",
      "Stealth",
      "Throw"
    ],
    "languages": [
      "Foreign",
      "Foreign"
    ],
    "equipment": [
      "Cell Phone",
      "Costume",
      "Power Based Armaments",
      "Set of Basic Clothes",
      "Self Help Book"
    ]
  },
  {
    "name": "Science",
    "description": "Your powers came from a Scientific source on Earth. Whether through a chemical spill, lab explosion, radiation exposure, or a super serum.",
    "proficiencyCount": 3,
    "proficiencyOptions": [
      "Ancient History",
      "Animal Handling",
      "Bluff",
      "Concentration",
      "Disarm",
      "Hack",
      "Insight",
      "Investigation",
      "Medicine",
      "Modern History",
      "Perception",
      "Persuasion",
      "Resolve",
      "Stealth"
    ],
    "languages": [
      "Foreign"
    ],
    "equipment": [
      "Cell Phone",
      "Costume",
      "Medical Tools",
      "Power Based Armaments",
      "Set of Basic Clothes"
    ]
  },
  {
    "name": "Technology",
    "description": "Your powers came from advanced Technology. Whether through full body exosuits, enhanced weapons and armaments, or other gadgets.",
    "proficiencyCount": 3,
    "proficiencyOptions": [
      "Bluff",
      "Disarm",
      "Hack",
      "Investigation",
      "Lockpick",
      "Medicine",
      "Pop Culture",
      "Quips",
      "Resolve",
      "Technology",
      "Tracking"
    ],
    "languages": [
      "Foreign"
    ],
    "equipment": [
      "Cell Phone",
      "Costume",
      "Hacker Tools",
      "Power Based Armaments",
      "Set of Basic Clothes"
    ]
  },    
];