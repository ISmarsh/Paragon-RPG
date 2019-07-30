import { Data } from "../core/types";

export type StatName = "Might" | "Swiftness" | "Vitality" | "Intelligence" | "Ego" | "Charisma"

export type Stat = Data<StatName> & {
  description: string;
};

export const Stats: Stat[] = [
  {
    "name": "Might",
    "description": "Might is how strong your character is physically. The more Might the more melee damage you are able to do and the heavier objects you can move. It is also easier to Grapple or Trip enemies."
  },
  {
    "name": "Swiftness",
    "description": "Swiftness is how dexterous your character is both in combat and outside of combat. The more Swiftness you have the more ranged damage you do and how quickly and efficiently you can disarm traps, hack computers, pick locks, or steal items. Swiftness also determines how much extra Stamina you have for Actions during your turn."
  },
  {
    "name": "Vitality",
    "description": "Vitality is how much health and physical defenses you have. The more Vitality the more Health and Defense you have and the better you are at handling your balance, concentration, and how resilient you are to status effects and torture. You gain your maximum for Recovery Dice in addition to your Health when you level up."
  },
  {
    "name": "Intelligence",
    "description": "Intelligence is how much knowledge you have. The more Intelligence the easier it is to know things about history, magic, technology, religion, and pop culture."
  },
  {
    "name": "Ego",
    "description": "Ego is how much innate intuition you have and mentally strong you are. The more Ego the easier it is to feel out encounters with enemies and animals, figure out the true intentions of people, and how to survey the situation from all angles. Ego also determines how much Fortitude you have for defenses."
  },
  {
    "name": "Charisma",
    "description": "Charisma is how charming you are and how well you are at talking. The more Charisma the easier it is to diffuse situations with your words, intimidate enemies into submission, deceive people, or spout off one-liners."
  },    
];
