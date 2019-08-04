import { Data } from "../core/types";
import { Index } from '../core/classes';
import { StatName } from './stat';

export type Archetype = Data & {
  description: string;
  inherentAbility: string;
  statIncreases: { [stat in StatName]?: 1 | 2 };
  primaryPower: string;
  secondaryPower: string;
  recoveryDice: string;
  enduranceDice: string;
}

export const Archetypes = new Index<Archetype>(
  {
    "name": "Blaster",
    "description": "The Blaster is an offensive juggernaut. They can deal a ton of damage from a distance and decent melee damage. However, the Blaster must be careful because they are somewhat fragile compared to other heroes with no real defenses. Their best defense is a powerful offense.",
    "inherentAbility": "Defiance (Blasters gain an additional 2 Stamina Points)",
    "statIncreases": {
      "Swiftness": 2,
      "Might": 1
    },
    "primaryPower": "Range",
    "secondaryPower": "Melee",
    "recoveryDice": "1d8",
    "enduranceDice": "1d10"
  },
  {
    "name": "Brute",
    "description": "Brutes live to fight and you revel in hand-to-hand combat. With strong offensive powers to inflict pain and impressive defenses to endure it, they’re the best there is in a straight one-on-one fight. They do lack ranged attacks, which could leave them vulnerable to hit and run tactics.",
    "inherentAbility": "Fury (When a Brute attacks or is attacked during a turn they build up Fury, at the start of their turn this Fury bonus is added to their damage rolls then resets to 0 at end of their turn for each turn after the first)",
    "statIncreases": {
      "Might": 2,
      "Vitality": 1
    },
    "primaryPower": "Melee",
    "secondaryPower": "Tank",
    "recoveryDice": "1d12",
    "enduranceDice": "1d10"
  },
  {
    "name": "Controller",
    "description": "The Controller has few offensive attacks and possesses few defenses, but they have access to a range of crowd control abilities that can turn the tide of a fight. A Controller can affect the behavior of villains and cause various status effects on them.",
    "inherentAbility": "Containment (Controllers do double damage to any target that is already Disoriented, Held, Immobilized, or Slept)",
    "statIncreases": {
      "Ego": 2,
      "Charisma": 1
    },
    "primaryPower": "Control",
    "secondaryPower": "Support",
    "recoveryDice": "1d6",
    "enduranceDice": "1d12"
  },
  {
    "name": "Defender",
    "description": "The Defender tends to help allies and attack foes from a distance. The Defender excels at powers that assist friends or hinders enemies. They are also able to attack at quite a range, but are nearly useless in hand-to-hand fights.",
    "inherentAbility": "Vigilance (The Defender gains a bonus to a single target healing power when healing an ally already injured, or a bonus to a single target debuff power when hindering an enemy already injured, this bonus is equal to half your level rounded down)",
    "statIncreases": {
      "Intelligence": 2,
      "Ego": 1
    },
    "primaryPower": "Support",
    "secondaryPower": "Range",
    "recoveryDice": "1d10",
    "enduranceDice": "1d8"
  },
  {
    "name": "Dominator",
    "description": "The Dominator has the devastating combination of control and ranged assault. A Dominator can freeze foes in place, make them flee in terror, or knock them unconscious then assault them with vicious ranged attacks while defenseless. Dominators lack sorely in defenses but are adept at quickly incapacitating single individuals.",
    "inherentAbility": "Domination (The Dominator builds up their Domination by causing Status Effects on enemies. Once 10 enemies have been hit with Status Effects, a Dominator can unleash Domination as a free action. For the next 1 minute, they are immune to Status Effects on themselves and have Advantage on all attacks)",
    "statIncreases": {
      "Ego": 2,
      "Swiftness": 1
    },
    "primaryPower": "Control",
    "secondaryPower": "Range",
    "recoveryDice": "1d6",
    "enduranceDice": "1d10"
  },
  {
    "name": "Mastermind",
    "description": "The Mastermind excels at using others to do their dirty work. Perhaps they summon demonic creature, undead minions, or beasts of the wild. Perhaps they command mercenaries, ninjas, or thugs. Or perhaps they build deadly robotic creations. They can summon them when needed and order them to do their bidding. They can help support their minions but don’t have much in the way of defenses or offensive capabilities being very vulnerable to direct confrontation.",
    "inherentAbility": "Supremacy (While your minions are within 30 feet of you they gain 10 temporary Health and Bosses can Act twice on your turn)",
    "statIncreases": {
      "Charisma": 2,
      "Intelligence": 1
    },
    "primaryPower": "Minions",
    "secondaryPower": "Support",
    "recoveryDice": "1d6",
    "enduranceDice": "1d8"
  },
  {
    "name": "Paragon",
    "description": "The Paragon is a front-line supporter that helps bolster the team or hinder the enemies while also boasting good melee damage. What they lack in range they make up for in versatility.",
    "inherentAbility": "Resilience (Paragons gain a second Prescence)",
    "statIncreases": {
      "Intelligence": 2,
      "Might": 1
    },
    "primaryPower": "Support",
    "secondaryPower": "Melee",
    "recoveryDice": "1d8",
    "enduranceDice": "1d8"
  },
  {
    "name": "Sentinel",
    "description": "The Sentinel can take it and dish it out all at once. They primarily can absorb vast amounts of damage, and hold their own in a skirmish. The Sentinel lacks any type of range, but would prefer to charge into the fray anyway.",
    "inherentAbility": "Taunt (The Sentinel can pull attention to them forcing a single enemy to target them instead of an ally. Taunt takes 1 Stamina Point and the enemy must make an Ego saving throw against 10 + your Vitality Modifier + Proficiency Bonus or must spend their actions moving towards you and attacking only you for the next 1 minute)",
    "statIncreases": {
      "Vitality": 2,
      "Might": 1
    },
    "primaryPower": "Tank",
    "secondaryPower": "Melee",
    "recoveryDice": "1d12",
    "enduranceDice": "1d8"
  },
  {
    "name": "Stalker",
    "description": "The Stalker is best when working from an ambush position, and can hide in plain sight to escape foes. Deadly attacks and good defense make them a dangerous combatant and the perfect assassin. Hit and run is their best move.",
    "inherentAbility": "Assassin’s Strike (If a Stalker is hidden with a proper Stealth check prior to using an attack, assuming the attack hits it is a critical hit)",
    "statIncreases": {
      "Swiftness": 2,
      "Might": 1
    },
    "primaryPower": "Melee",
    "secondaryPower": "Tank",
    "recoveryDice": "1d8",
    "enduranceDice": "1d10"
  },
  {
    "name": "Warlord",
    "description": "The Warlord is a defensive monster able to take a great number of hits, but unable to dish out quite as much punishment. Instead they deal their damage by controlling minions and rallying them to his side when in a skirmish.",
    "inherentAbility": "Rally (The Warlord can Rally their minions to their location for 1 Stamina Point allowing them to use twice their movement speed to try and get within 10 feet of their master, if they do they can Act once during this Rally)",
    "statIncreases": {
      "Charisma": 2,
      "Vitality": 1
    },
    "primaryPower": "Tank",
    "secondaryPower": "Minions",
    "recoveryDice": "1d12",
    "enduranceDice": "1d6"
  },
);
