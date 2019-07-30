import { Data } from "../core/types";
import { Index } from '../core/classes';

export type Skill = Data & {
  description: string;
};

export const Skills = new Index<Skill>(
  {
    "name": "Acrobatics",
    "description": "Acrobatics checks are used for situations when a hero wants to be nimble and flashy with their movement or attacks, as well as doing parkour, slipping out of grapples, or getting through difficult terrain."
  },
  {
    "name": "Ancient History",
    "description": "Ancient History checks are used to determine knowledge for events of the past exceeding 100 years in the past. Any History check made to determine information from the Year 1919 and before is considered an Ancient History check."
  },
  {
    "name": "Animal Handling",
    "description": "Animal Handling checks are used to see how well you can deal with beasts in nature including woodland creatures, birds, and ferocious beasts from enemy factions."
  },
  {
    "name": "Arcana",
    "description": "Arcana checks are used when determining knowledge about magical artifacts, locations, and phenomena."
  },
  {
    "name": "Balance",
    "description": "Balance checks are used when seeing how nimble you are at balancing on ledges, beams, or objects, as well as when trying to prevent yourself from being knocked back or knocked down."
  },
  {
    "name": "Bluff",
    "description": "Bluff checks are used to determine how well you can conceal information and lie."
  },
  {
    "name": "Climb",
    "description": "Climb checks are used to determine if you can keep your grip hanging from ledges, beams, or objects, as well as when trying to climb vertical surfaces and ceilings."
  },
  {
    "name": "Concentration",
    "description": "Concentration checks are used to determine how well you are equipped to ignore the physical world and focus on your thoughts while under duress or meditation."
  },
  {
    "name": "Diplomacy",
    "description": "Diplomacy checks are used to determine how well you can diffuse tense situations, mend bridges between enemies or citizens, or bring in an enemy peacefully."
  },
  {
    "name": "Disarm",
    "description": "Disarm checks are used to determine how well you can disarm non-computer based traps, and how adept you are at disarming enemies of their firearms and weapons."
  },
  {
    "name": "Hack",
    "description": "Hack checks are used to determine how well you can disarm computer based traps, bypass security locks with keycards, or break through password locks on technology."
  },
  {
    "name": "Insight",
    "description": "Insight checks are used to determine the true intentions of a person and figure out if they are lying or not."
  },
  {
    "name": "Intimidation",
    "description": "Intimidation checks are used to threaten people into giving you what you want whether that is items, information, or locations. The GM can determine how well your Intimidation lands if you use an Action during an Encounter for an Intimidation check, if it is well received they may grant the enemy disadvantage on their next Action."
  },
  {
    "name": "Investigation",
    "description": "Investigation checks are used to determine how well you can scout out a singular area to find important details and clues."
  },
  {
    "name": "Lift",
    "description": "Lift checks are used to determine how successful you are at lifting up stationary objects, holding up collapsing structures and objects, or carrying people."
  },
  {
    "name": "Lockpick",
    "description": "Lockpick checks are used to determine how successful you are at picking locked doors and objects."
  },
  {
    "name": "Medicine",
    "description": "Medicine checks are used to determine the health or anatomy of a person. These checks are also used when trying to stabilize a player who has fallen to 0 Health."
  },
  {
    "name": "Modern History",
    "description": "Modern History checks are used to determine knowledge for events of the past 100 years. Any History check made to determine information from the Years 1920-2020 is considered a Modern History check."
  },
  {
    "name": "Perception",
    "description": "Perception checks are used to determine how well you can scout out large areas to find important details and clues based on your sight, smell, and hearing."
  },
  {
    "name": "Persuasion",
    "description": "Persuasion checks are used to determine how much you can sway people with your words into doing whatever you ask."
  },
  {
    "name": "Pickpocket",
    "description": "Pickpocket checks are used to determine how successful you can steal from unaware people, or how well you can place objects on a person without them knowing."
  },
  {
    "name": "Pop Culture",
    "description": "Pop Culture checks are used to determine how much knowledge about Popular Culture you know, including all forms of music, film, television, video games, internet culture, and books. These checks also determine how well you might know a Celebrity or Famous Hero/Villain."
  },
  {
    "name": "Pull/Push",
    "description": "Pull/Push checks are used to determine how well you can pull or push stationary objects or vehicles, pull objects out of the ground, or drag immense objects or vehicles."
  },
  {
    "name": "Quips",
    "description": "Quips checks are used to determine how well your humor lands with people and enemies whether that be one-liners or puns. The GM can determine how well your Quips land if you use an Action during an Encounter for a Quips check, if it is well received they may grant you advantage on your next Action."
  },
  {
    "name": "Religion",
    "description": "Religion checks are used to determine how much you knowledge you have about cults, fanatics, and religious beliefs."
  },
  {
    "name": "Resolve",
    "description": "Resolve checks are used to determine how well you can break free from restraints and status effects, as well as endure harsh environments, phobias, or torture."
  },
  {
    "name": "Stealth",
    "description": "Stealth checks are used to determine how well you can hide from sight or try to keep quiet while on the move."
  },
  {
    "name": "Technology",
    "description": "Technology checks are used to determine how much knowledge you have about technology including alarm systems, cell phones, computers, firearms, radios, televisions, and weapons."
  },
  {
    "name": "Throw",
    "description": "Throw checks are used to determine how easily you can throw objects and vehicles, or how far you are able to toss enemies you have grappled."
  },
  {
    "name": "Tracking",
    "description": "Tracking checks are used to determine how easily you can track down people with the information you know in the environment. These checks can also be used to determine how well you can read a map you have never seen before."
  },
);
