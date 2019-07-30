import { Data } from "../core/types";
import { Index } from '../core/classes';

export type Alignment = Data & {
  description: string;
};

export const Alignments = new Index<Alignment>(
  {
    "name": "Hero",
    "description": "You are the purest sense of good in the world. You never venture from your path of righteous right, and assure the safety of citizens at all costs. You never kill and always apprehend criminals."
  },
  {
    "name": "Anti-Hero",
    "description": "You have an edge when it comes to the any means necessary approach to bringing justice in the world. You often stray from the pure white knight of heroes, but are still almost entirely good in your methods and assuring safety to citizens. You very rarely kill but are capable of it."
  },
  {
    "name": "Vigilante",
    "description": "While still on the tipping side of good, you are undeterred from bringing justice due to the moralities of being a hero. You do what you can to bring down criminals, sometimes putting citizens at risk. Kill or not as long as you bring the villain to a close that’s enough for you."
  },
  {
    "name": "Criminal",
    "description": "On the tipping side of evil, you are out for number one more than anything else. You very rarely have mixed feelings of morality and as long as you are benefitting you don’t mind putting citizens at risk. When it comes to finding and defeating your enemies, you don’t hesitate to kill them if you need to."
  },
  {
    "name": "Rogue",
    "description": "You have nearly lost all sense of justice and simply wish to fuel your own ambitions plots. Only in rare circumstances do you find yourself possibly being swayed to the good side of your psyche. You don’t care for the meager citizens and when going after somebody on your list you use any means necessary to kill them."
  },
  {
    "name": "Villain",
    "description": "You are the purest sense of evil in the world. You concoct your plots of revenge and malicious intent doing anything and everything to assure the outcome is in your favor. If there is somebody standing in your way, eliminating them is the only thing on your mind. It’s kill or be killed, and you refuse to be on the receiving end. All that matters is what you want, and you will achieve it."
  },    
);
