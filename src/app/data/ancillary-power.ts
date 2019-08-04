import { Data } from "../core/types";
import { Index } from '../core/classes';
import { StatName } from './stat';

export type AncillaryPower = Data & {
  description: string;
  statIncrease?: { [stat in StatName]?: number } | { "Choose": (1 | 2)[] };
  skillProficiency?: StatName;
}

export const AncillaryPowers = new Index<AncillaryPower>(
  {
    "name": "Stat Increase",
    "description": "Choose one stat to increase by 2, and another to increase by 1. Neither can exceed 30.",
    statIncrease: { "Choose": [2, 1] }
  },
  {
    "name": "Danger Sense",
    "description": "You can use your reaction to force an attack roll against you that hits to be rerolled and they must take the new result."
  },
  {
    "name": "Density Manipulation",
    "description": "You can manipulate the density of objects or people with your mind. You can choose to either decrease their density making them extremely light, or increase their density making them extremely heavy. By spending 1 Stamina Point you can choose either to increase or decrease density, when increased a person gains +2 to their Defenses but loses 20 feet of Movement or an object becomes nearly unmovable. When decreased a person gains 20 feet of Movement but loses -2 to their Defenses or an object becomes easy to move. You can only have one person or object under these conditions at a time."
  },
  {
    "name": "Echolocation",
    "description": "You can learn the locations of all floor objects, vehicles, and people within 60 feet of you by using a sonar-like bouncing of sound wave patterns."
  },
  {
    "name": "Enhanced Durability",
    "description": "With a minor increase in your durability you gain +1 Vitality and gain proficiency in one Vitality based skill of your choice that you aren’t already proficient in.",
    "statIncrease": {
      "Vitality": 1
    },
    "skillProficiency": "Vitality"
  },
  {
    "name": "Enhanced Intuition",
    "description": "With a minor increase in your intuition you gain +1 Ego and gain proficiency in one Ego based skill of your choice that you aren’t already proficient in.",
    "statIncrease": {
      "Ego": 1
    },
    "skillProficiency": "Ego"
  },
  {
    "name": "Enhanced Reflexes",
    "description": "With a minor increase in your reflexes you gain +1 Swiftness and gain proficiency in one Swiftness based skill of your choice that you aren’t already proficient in.",
    "statIncrease": {
      "Swiftness": 1
    },
    "skillProficiency": "Swiftness"
  },
  {
    "name": "Enhanced Smarts",
    "description": "With a minor increase in your brain power you gain +1 Intelligence and gain proficiency in one Intelligence based skill of your choice that you aren’t already proficient in.",
    "statIncrease": {
      "Intelligence": 1
    },
    "skillProficiency": "Intelligence"
  },
  {
    "name": "Enhanced Speech",
    "description": "With a minor increase in your social skills you gain +1 Charisma and gain proficiency in one Charisma based skill of your choice that you aren’t already proficient in.",
    "statIncrease": {
      "Charisma": 1
    },
    "skillProficiency": "Charisma"
  },
  {
    "name": "Enhanced Strength",
    "description": "With a minor increase in your strength you gain +1 Might and gain proficiency in one Might based skill of your choice that you aren’t already proficient in.",
    "statIncrease": {
      "Might": 1
    },
    "skillProficiency": "Might"
  },
  {
    "name": "Fauna Speech",
    "description": "You have the ability to speak with animals that normally do not talk. You can understand what they say and can speak back to them although others cannot understand. If an animal has less than 4 Intelligence it may not be very smart or helpful but you can still speak with them."
  },
  {
    "name": "Flora Speech",
    "description": "You have the ability to speak with plant life that normally do not talk. You can understand what they say and can speak back to them although others cannot understand."
  },
  {
    "name": "Invisibility",
    "description": "You have the ability to turn your body invisible to normal sight. For 1 Stamina Point you can turn completely invisible and gain +10 to Stealth checks. You lose this invisibility bonus if you use your Traversal Power to move instead of walking, you make an attack, or a foe that has enhanced sight can see you."
  },
  {
    "name": "Luck",
    "description": "You have an uncanny amount of luck in almost all situations. You can reroll up to 3 dice rolls a day and take the new result."
  },
  {
    "name": "Phasing",
    "description": "You can move through objects, people, and walls no more than 6 inches thick. If you end a turn while attempting to phase inside an object or wall you are forced into the nearest unoccupied space and take 1d10 force damage."
  },
  {
    "name": "Photographic Memory",
    "description": "You have the ability to perfectly remember anything you have ever been told or shown. Whenever you are making an Intelligence check to recall information you have advantage, and if its information from within the last 24 hours you automatically remember it."
  },
  {
    "name": "Power Sensing",
    "description": "You can sense the powers in a person using your mind. For 1 Stamina Point you can sense all powers a person has including Power Sets, Traversal Powers, and Ancillary Powers. You cannot sense their Weakness, Prescence, or Incarnate Powers."
  },
  {
    "name": "Sublimation",
    "description": "You can temporarily transform your body into a gaseous form. As a reaction, you can turn into a gaseous form and all attacks automatically miss you if they are physical damage, you still take non-physical damage. You can do this only once per Encounter."
  },
  {
    "name": "Transmutation",
    "description": "You can transform one element into another by your touch. If you touch an object you can spend 1 minute to transmute it into another element. These elements include Wood, Stone, Iron, Steel, Copper, Silver, Gold, and Titanium."
  },
  {
    "name": "Vehicles",
    "description": "You are an expert at vehicles and have one at your disposal. Choose from one of the following single person vehicles: Motorcycle, Car, Helicopter, Jetpack, Submarine, or Boat. While using this vehicle your Speed increases by 20 feet, additionally if you have a Helicopter or Jetpack you can move freely by flying, and if you have a Submarine or Boat you can move over or underneath water freely."
  },
  {
    "name": "X-Ray Vision",
    "description": "You can see through up to 6 inches of solid matter within 60 feet of your location."
  },
);
