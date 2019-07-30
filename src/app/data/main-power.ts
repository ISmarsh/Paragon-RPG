import { Data } from "../core/types";
import { CategoryIndex } from '../core/classes';
import { Die } from '../core/types';

export type MainPower = Data & {
  activation: 'Free' | 'Act' | 'React';
  stamina: number;
  range: 'Self' | 'Melee' | number;
  area?: { size: number, type: string }
  damage?: { scale: {level: number, die: Die}[], type: string }
  description: string;
}

export const MainPowers = new CategoryIndex<MainPower>({
  "Darkness Control": [
    {
      "name": "Shadowy Binds",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You take control of your victim’s shadow causing it to entangle them in place and take a small amount of damage. Make a ranged attack against a single foe, on hit they take 1d6 Darkness damage and make a Swiftness saving throw or become Immobilized. This damage increases to 2d6 at Level 5, 3d6 at Level 10, 4d6 at Level 15, and 5d6 at Level 20.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              6
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              6
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              6
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              6
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              6
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Dark Grasp",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You take control of your victim’s shadow to wholly envelop them, leaving them held and helpless. Target a single foe and they must make a Swiftness saving throw or become Held."
    },
    {
      "name": "Negative Strike",
      "activation": "Act",
      "stamina": 1,
      "range": "Melee",
      "description": "You pull forth a part of your own shadow to swipe at the foe with an arc of darkness. Make a melee attack against a single foe, on hit they take 1d10 Darkness damage. This damage increases to 2d10 at Level 10, 3d10 at Level 15, and 4d10 at Level 20.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 10,
            "die": [
              2,
              10
            ]
          },
          {
            "level": 15,
            "die": [
              3,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              4,
              10
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Possess",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You cause your foe to be possessed by a dark entity from the Netherworld. Target a single foe and they must make an Ego saving throw or become Confused."
    },
    {
      "name": "Living Shadows",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You extend and animate your own shadow causing it to entangle all foes within range. All foes in range must make a Swiftness saving throw or become Immobilized.",
      "area": {
        "size": 20,
        "type": "cone"
      }
    },
    {
      "name": "Fearsome Stare",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You instill tremendous fear to all those in front of you. All foes in range must make an Ego saving throw or become Feared. Additionally, at the beginning of every turn they are Feared including when the power is used they take 1d8 Darkness damage. This damage increases to 2d8 at Level 15 and 3d8 at Level 20.",
      "area": {
        "size": 20,
        "type": "cone"
      },
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              3,
              8
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Heart of Darkness",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "In a burst of negative energy you overwhelm the minds of those around you causing them to be stunned and suffer damage. Each foe within 30 feet of you must make a Vitality saving throw or become Disoriented. Additionally, they take 3d10 Darkness damage. They take half damage on a successful save and are not Disoriented.",
      "area": {
        "size": 30,
        "type": "circle"
      },
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              10
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Haunt",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You summon a terrible Shade from the Netherworld to harass your foe. Target a single foe and you summon a Shadow within 5 feet of their location in any unoccupied spot. For 1 minute, this Shade is under your command. He uses your Initiative number. He can move up to 20 feet in any direction on a turn, using flight. He can make a melee attack using your Ego Modifier as bonus for to hit and damage rolls that deals 3d6 Darkness damage on a hit. If this Shade defeats a foe, you regain 10 Health.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              6
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Shadow Field",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You blanket a huge area in darkness. Any foe who enters this area will have a chance to be held and take damage. Choose an area within range, and every foe in a 30ft circle from that location must make a Swiftness saving throw or take 2d10 Darkness damage and become Held. This field stands for the next 1 minute and any foe entering for the first time or ending a turn inside this takes the damage again.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Umbra Beast",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You conjure up one of the most fearsome creatures of the Netherworld. This creature will fight beside you using bite and darkness attacks. The Umbra Beast’s stat block is below. It acts on your Initiative and gets one Movement and Action a turn. It remains until you dismiss it, resummons it, or it dies."
    },
    
    
  ],
  "Force Fields": [
    {
      "name": "Deflection Shield",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You encase a single ally inside a deflective shield for 1 minute. For the duration they gain +2 Defense and when attacks manage to get through are reduced by 1d4 damage. This reduction of damage increases as you level up. 1d6 at Level 5, 1d8 at Level 10, 1d10 at Level 15, 1d20 at Level 20.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              4
            ]
          },
          {
            "level": 5,
            "die": [
              1,
              6
            ]
          },
          {
            "level": 10,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              1,
              20
            ]
          }
        ],
        "type": ""
      }
    },
    {
      "name": "Insulation Shield",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You encase a single ally inside an insulating shield for 1 minute. For the duration they gain +2 Fortitude and when attacks manage to get through are reduced by 1d4 damage. This reduction of damage increases as you level up. 1d6 at Level 5, 1d8 at Level 10, 1d10 at Level 15, 1d20 at Level 20.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              4
            ]
          },
          {
            "level": 5,
            "die": [
              1,
              6
            ]
          },
          {
            "level": 10,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              1,
              20
            ]
          }
        ],
        "type": ""
      }
    },
    {
      "name": "Personal Force Field",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You encase yourself inside a personalized impenetrable bubble. Until you decide to drop concentration on this power all damage done to you is reduced to 0, you are considered Held, and cannot be the target of ally powers. The only Act you can do while inside your Personal Force Field is expend your Stamina die."
    },
    {
      "name": "Force Bolt",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You discharge a bolt of force in the form of a bubble that knocks foes back and deals a bit of damage. Make a ranged attack roll against a single target. On hit, they take 1d8 force damage and must succeed on a Might check or be knocked back 20 feet. This damage increases to 2d8 at Level 10, 3d8 at Level 15, and 4d8 at Level 20.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              4,
              8
            ]
          }
        ],
        "type": "force"
      }
    },
    {
      "name": "Detention Field",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You encase a single foe inside an impenetrable bubble trapping them. A single target within range must succeed on a Swiftness saving throw or become entombed in a detention bubble. While inside this bubble, all damage dealt to them is reduced to 0, they are considered Held, and they cannot be the target of ally powers or status effects. They can make a Might saving throw at the end of their turn to try and break free from this field."
    },
    {
      "name": "Repulsion Field",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You let out a burst of force energy directly around you knocking back everyone within 5 feet of you. Each target within 5 feet of you must succeed on a Swiftness saving throw or be knocked back 20 feet."
    },
    {
      "name": "Dispersion Bubble",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You cast out a large bubble around the area around you encasing allies in a thin protective bubble. For 1 minute, you create a large bubble in a 10 foot radius around you. Any allies within this bubble, including yourself gain +1 Defense and are immune to becoming Immobilized, Held, or Disoriented."
    },
    {
      "name": "Repulsion Bomb",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You hurl a large bubble of repulsive force sending a shockwave into a group of enemies. Choose a spot within range, in a 30 foot radius from that point everyone must succeed on a Swiftness saving throw or be knocked down prone. If a target fails this saving throw by 5 or more they are Disoriented until the start of your next turn."
    },
    {
      "name": "Force Bubble",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You activate a large constantly pulsing bubble of force around you. For 1 minute, every target you choose within 30 feet of you must succeed on a Might saving throw or be pushed back 10 feet. Any time an enemy ends their turn within 10 feet of you, you can have them remake this saving throw to knock them back."
    },
    {
      "name": "Crushing Field",
      "activation": "Act",
      "stamina": 5,
      "range": 30,
      "description": "You encase a single foe inside a crushing bubble that slowly shrinks in on them. Make a ranged attack roll against a single target. On hit, they are considered Held and take 2d10 force damage. Until they break free, they take an additional 2d10 force damage at the start of each of their turns.",
      "damage": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "force"
      }
    },        
  ],
  "Radiation Aura": [
    {
      "name": "Alpha Barrier",
      "range": "Self",
      "activation": "Act",
      "stamina": 1,
      "description": "You cloak yourself in a field of protective radiation that grants an increase to defense. As an Act, toggle this power your Defense increases by 2. This increases as you level +3 at Level 5, +4 at Level 10, +5 at Level 15, and +6 at Level 20. A toggled power remains active until you toggle it off, or you are held/slept/disoriented."
    },
    {
      "name": "Gamma Boost",
      "range": "Self",
      "activation": "Act",
      "stamina": 1,
      "description": "You increase the gamma within your body to boost your regeneration for a moment. As an Act, you heal 1d8 + Vitality hit points. This healing increases as you level 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20."
    },
    {
      "name": "Beta Barrier",
      "range": "Self",
      "activation": "Act",
      "stamina": 1,
      "description": "You cloak your mind in a protective shielding of radiation that grants an increase to fortitude. As an Act, toggle this power your Fortitude increases by +1. This increases as you level +2 at Level 5, +3 at Level 10, +4 at Level 15, and +5 at Level 20. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Proton Armor",
      "range": "Self",
      "activation": "Act",
      "stamina": 2,
      "description": "You quickly increase the amount of radiation around you to shield yourself from energy attacks. As an Act, toggle this power you gain resistance to Energy, Fire, Ice, Lightning, and Water damage. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Fallout Shelter",
      "range": "Self",
      "activation": "Act",
      "stamina": 2,
      "description": "You flex a burst of radiation around you freeing yourself from all status effects. When you activate this power, as an Act, any status effect upon you is instantly ended, with the exception of Disoriented."
    },
    {
      "name": "Radiation Therapy",
      "range": "Self",
      "activation": "Act",
      "stamina": 2,
      "description": "You concentrate your energies to harness a long term regeneration boost to mend your wounds closed. Make a melee attack against all creature around you, on hit each enemy takes 1d10 +Might energy damage. Additionally, you regain 1d6 hit points per enemy hit."
    },
    {
      "name": "Decay",
      "range": "Self",
      "activation": "Act",
      "stamina": 2,
      "description": "You disperse a small amount of radiation in the area immediately around you slowly draining your foes. As an Act for 1 minute, you have an aura 10 feet around you. Any enemy within this aura when cast or if they end their turn within it take 1d8 energy damage and get a -2 penalty on their to hit rolls and saving throws."
    },
    {
      "name": "Particle Shielding",
      "range": "Self",
      "activation": "Act",
      "stamina": 3,
      "description": "You channel a tremendous amount of radiation into a bubble around you. As a reaction until the start of your next turn, you gain a protective bubble that grants you resistance to all damage and any damage dealt to you is instead healed."
    },
    {
      "name": "Ground Zero",
      "range": "Self",
      "activation": "Act",
      "stamina": 3,
      "description": "You release a mixture of radiation into the area, all nearby foes are barraged with harmful radiation and shredding their defenses. Make a melee attack against all foes within melee range, on hit they take 3d10 +Might energy damage and they get -4 Defense until the start of your next turn."
    },
    {
      "name": "Total Meltdown",
      "range": "Self",
      "activation": "Act",
      "stamina": 5,
      "description": "After you build up a dangerous amount of radiation you release it as both a shield and to empower yourself. As an Act, until the start of your next turn, you gain +5 to Defense and Fortitude. Additionally, you gain +2 to your to hit and damage rolls for melee attacks."
    },
  ],
});
