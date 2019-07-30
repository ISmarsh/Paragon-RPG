import { Data } from "../core/types";
import { Index } from '../core/classes';

export type TraversalPower = Data & {
  abilities: (Data & { description: string; })[];
}

export const TraversalPowers = new Index<TraversalPower>(
  {
    "name": "Burrow",
    "abilities": [
      {
        "name": "Burrowing",
        "description": "While traveling you can burrow underground and reemerge up to your Speed. Your base Speed is 30 feet, and this increases as you level. 40 feet at Level 5, 50 feet at Level 10, 60 feet at Level 15, 80 feet at Level 20."
      },
      {
        "name": "Tremor Sense",
        "description": "As an Act, you can spend 1 Stamina Point to cause a small quake with your foot and can sense any underground passages within 500 feet."
      }
    ]
  },
  {
    "name": "Flight",
    "abilities": [
      {
        "name": "Flying",
        "description": "While traveling you can freely move through space by flying up to your Speed. Your base Speed is 30 feet, and this increases as you level. 40 feet at Level 5, 50 feet at Level 10, 60 feet at Level 15, 80 feet at Level 20."
      },
      {
        "name": "Bird’s Eye View",
        "description": "As an Act, you can spend 1 Stamina Point to gain advantage on Perception checks while more than 10 feet in the air."
      }
    ]
  },
  {
    "name": "Super Jump",
    "abilities": [
      {
        "name": "Jumping",
        "description": "While traveling you can freely leap through spaces and land at another space up to your Speed away assuming you don’t have a surface above you. Your base Speed is 30 feet, and this increases as you level. 40 feet at Level 5, 50 feet at Level 10, 60 feet at Level 15, 80 feet at Level 20."
      },
      {
        "name": "Bounce",
        "description": "When you are hit with Knockdown you automatically bounce back up instead of becoming prone. Additionally, if you are hit with Knockback into a wall or object you can bounce back to your original spot where you were hit."
      }
    ]
  },
  {
    "name": "Super Speed",
    "abilities": [
      {
        "name": "Sprinting",
        "description": "While traveling you move on foot extremely fast, and can even run up walls and across ceilings assuming you don’t finish your movement on those surfaces. Your base Speed is 50 feet, and this increases as you level. 60 feet at Level 5, 70 feet at Level 10, 80 feet at Level 15, 100 feet at Level 20."
      },
      {
        "name": "Haste",
        "description": "You gain a bonus of +3 to your Initiative Bonus inherently with your quickness."
      }
    ]
  },
  {
    "name": "Super Swim",
    "abilities": [
      {
        "name": "Swimming",
        "description": "While traveling through water you can move extremely fast. Your base Speed on land is 30 feet. Your base Speed in water is 50 feet, and this increases as you level. 60 feet at Level 5, 70 feet at Level 10, 80 feet at Level 15, 100 feet at Level 20."
      },
      {
        "name": "Amphibious",
        "description": "You can breathe both air and water, never needing to make Resolve checks for lack of air while swimming underwater."
      }
    ]
  },
  {
    "name": "Swing",
    "abilities": [
      {
        "name": "Swinging",
        "description": "While traveling you zip through the skies on lines whether that be with grappling hooks, tendrils, or webs. You can move anywhere within your Speed range and land. Your base Speed is 30 feet, and this increases as you level. 40 feet at Level 5, 50 feet at Level 10, 60 feet at Level 15, 80 feet at Level 20."
      },
      {
        "name": "Ranged Grapple",
        "description": "When you make a check to Grapple a target you have a range of 30 feet and make the check as Swiftness instead of Might."
      }
    ]
  },
  {
    "name": "Teleportation",
    "abilities": [
      {
        "name": "Teleport",
        "description": "While traveling you teleport from one location to another within the range of your Speed. Your base Speed is 30 feet, and this increases as you level. 40 feet at Level 5, 50 feet at Level 10, 60 feet at Level 15, 80 feet at Level 20."
      },
      {
        "name": "Recall Friend",
        "description": "As an Act, you can spend 1 Stamina Point to bring an ally within 30 feet of you to your location and place them in an unoccupied space within 5 feet of you."
      }
    ]
  },
);
