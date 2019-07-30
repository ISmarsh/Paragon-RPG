import { Data } from "../core/types";
import { Index } from '../core/classes';

export type Origin = Data & {
  description: string;
  proficiencyCount: number;
  proficiencyOptions: string[];
  languages: string[];
  equipment: string[];
  attack: string
}

export const Origins = new Index<Origin>(
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
    ],
    "attack": "Tendril (Might based melee attack, 1d6 + Might Modifier damage)"
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
    ],
    "attack": "Apprentice Charm (Swiftness based range attack, 30ft range, 1d6 + Swiftness Modifier energy damage and if the attack is a Critical Hit the foe is Confused)"
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
    ],
    "attack": "Mutagen Capsule (Swiftness based range attack, 30ft range, 1d6 + Swiftness Modifier poison damage)"
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
    ],
    "attack": "Combo Strike (Might based melee attack, 2d4 + Swiftness Modifier physical damage)"
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
    ],
    "attack": "Enhanced Strike (Might based melee attack, 1d6 + Might Modifier physical damage)"
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
    ],
    "attack": "Tazer Shot (Swiftness based range attack, 30ft range, 1d4 + Swiftness Modifier lightning damage and if the attack is a Critical Hit the foe is Disoriented)"
  },    
);
