import { Data } from "../core/types";
import { CategoryIndex } from '../core/classes';
import { Die } from '../core/types';

export type MainPower = Data & {
  activation: 'Free' | 'Act' | 'React' | 'Automatic';
  stamina: number;
  range: 'Self' | 'Melee' | number;
  description: string;
  area?: { size: number, type: string }
  effectRoll?: { scale: {level: number, die: Die}[], type: string }
  minion?: Minion;
}

export type Minion = {
  name: string;
  health: number;
  speed: number;
  defense: number;
  fortitude: number;
  might: number;
  swiftness: number;
  vitality: number;
  intelligence: number;
  ego: number;
  charisma: number;
  weaknesses: string;
  presences: string;
  acts: string[];
}

export const MainPowers = new CategoryIndex<MainPower>({
  "Fire Control": [
    {
      "name": "Ring of Fire",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You immobilize a single for in a ring of flames. Make a ranged attack roll against a single foe. On hit, they take 1d12 fire damage and are Immobilized. This damage increases to 2d12 at Level 5, 3d12 at Level 10, 4d12 at Level 15, and 5d12 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              12
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              12
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              12
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              12
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              12
            ]
          }
        ],
        "type": "Fire"
      }
    },
    {
      "name": "Char",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You incapacitate a distant foe, choking them with smoldering soot and ash. Make a ranged attack roll against a single foe. On hit they take 1d8 and are Held. This damage increases to 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              8
            ]
          }
        ],
        "type": ""
      }
    },
    {
      "name": "Quick Burn",
      "activation": "React",
      "stamina": 1,
      "range": "Self",
      "description": "You rapidly increase the heat around you causing those around you to exit the area. Each foe within range of you must succeed on a Vitality saving throw or move 10 feet away from you.",
      "area": {
        "size": 5,
        "type": "Area"
      }
    },
    {
      "name": "Fire Cages",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You immobilize a group of foes within cages of flames in front of you. Each foe in a 15 foot cone in front of you must succeed on a Vitality saving throw or take 1d12 fire damage and are immobilized. This damage increases to 2d12 at Level 10, 3d12 at Level 15, and 4d12 at Level 20.",
      "area": {
        "size": 15,
        "type": "Cone"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              12
            ]
          },
          {
            "level": 10,
            "die": [
              2,
              12
            ]
          },
          {
            "level": 15,
            "die": [
              3,
              12
            ]
          },
          {
            "level": 20,
            "die": [
              4,
              12
            ]
          }
        ],
        "type": "Fire"
      }
    },
    {
      "name": "Hot Feet",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You heat the ground in a large area around yourself causing discomfort and minor damage. For 1 minute, you gain an aura of heat 30 feet around you. Any foe in this area when you activate this power, or ends their turn in the area takes 1d6 fire damage and is Slowed.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              6
            ]
          }
        ],
        "type": "Fire"
      }
    },
    {
      "name": "Smoke",
      "activation": "Act",
      "stamina": 2,
      "range": 60,
      "description": "You toss cinders at a single foe and coat an area in a cloud of smoke. Make a ranged attack roll against a single foe. On hit, they take 1d12 fire damage and are Disoriented. Each foe within 20 feet of the target must succeed on a Vitality saving throw or become Slowed and have disadvantage on Perception checks until they leave the affected area. The area remains for 1 minute, or until the foe is defeated.",
      "area": {
        "size": 20,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              12
            ]
          }
        ],
        "type": "Fire"
      }
    },
    {
      "name": "Bonfire",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You create a bonfire in an area that burns any foe that touches it and emits an exhausting heat around it. Choose an area within range to create a bonfire on a single 5 foot area. Any foe that is on this space takes 3d12 fire damage and is knocked back 10 feet. For 1 minute, this bonfire stands and emits an aura for 30 feet that causes Slow to anyone passing through its area of effect.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              12
            ]
          }
        ],
        "type": "Fire"
      }
    },
    {
      "name": "Cinders",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You create a large area where a whirlwind of cinders causes foes to choke. Choose an area within range to create a whirlwind of cinders on a single 5 foot area. All foes within 30 feet of this whirlwind are Disoriented.",
      "area": {
        "size": 30,
        "type": "Area"
      }
    },
    {
      "name": "Flashflare",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You bring forth a brilliant flash that severely hurts a target and disorients them. Make a ranged attack roll against a single foe. On hit, they take 3d12 fire damage and are Disoriented.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              12
            ]
          }
        ],
        "type": "Fire"
      }
    },
    {
      "name": "Fire Imps",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You form three small imps of flames into humanoid forms. These creatures will fight beside you using fiery claw attacks. The Fire Imp stat block is below. They act on your Initiative and get one Movement and Act a turn. They remain until you dismiss them, resummons them, or they dies.",
      "minion": {
        "name": "Fire Imp",
        "health": 30,
        "speed": 20,
        "defense": 12,
        "fortitude": 12,
        "might": 14,
        "swiftness": 16,
        "vitality": 12,
        "intelligence": 6,
        "ego": 10,
        "charisma": 7,
        "weaknesses": "Water",
        "presences": "Fire, Poison",
        "acts": [
          "Fire Claws (Melee, +5 to Hit, 2d12 fire damage)"
        ]
      }
    }
  ],
  "Plant Control": [
    {
      "name": "Entangle",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You immobilize a single target in a twisted mass of thorny roots. Make a ranged attack roll against a single target. On hit, they take 1d8 Physical damage and must succeed on a Swiftness saving throw or become Immobilized. This damage increases to 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              8
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Strangler",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You strangle a foe with massive vines from the ground keeping them in place. Make a ranged attack roll against a single target. On hit, they are Held."
    },
    {
      "name": "Barbs",
      "activation": "React",
      "stamina": 1,
      "range": "Self",
      "description": "You instinctually burst forth barbed roots after taking a melee attack. As a reaction, when you are hit by a melee attack the foe that attacked you takes 1d6 Physical damage. This damage increases to 2d6 at Level 10, 3d6 at Level 15, and 4d6 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              6
            ]
          },
          {
            "level": 10,
            "die": [
              2,
              6
            ]
          },
          {
            "level": 15,
            "die": [
              3,
              6
            ]
          },
          {
            "level": 20,
            "die": [
              4,
              6
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Roots",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You immobilize a group of foes in front of you by tangling their feet in a twisted mass of roots. Everyone within range must succeed on a Swiftness saving throw. On failure, they are immobilized and take 1d8 Physical damage. On success, they take half damage and are not immobilized. This damage increases to 2d8 at Level 10, 3d8 at Level 15, and 4d8 at Level 20.",
      "area": {
        "size": 15,
        "type": "Cone"
      },
      "effectRoll": {
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
        "type": "Physical"
      }
    },
    {
      "name": "Spore Burst",
      "activation": "Act",
      "stamina": 2,
      "range": 60,
      "description": "You hurl a large fungal pod of spores at a single foe causing it to burst and effect those around them. Make a ranged attack against a single foe. On hit, they take 1d10 Physical damage, and everyone within 10 feet of them must succeed on a Vitality saving throw. On failure, they fall asleep.",
      "area": {
        "size": 10,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Seeds of Confusion",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You toss a handful of seeds from a Baffle plant at your foes. Everyone in range must succeed on an Ego saving throw. On failure, they are confused. On success, they are disoriented until the start of your next turn.",
      "area": {
        "size": 15,
        "type": "Cone"
      }
    },
    {
      "name": "Vines",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You spring forth a massive area of vines to encase foes. Choose a spot within range and everyone within 30 feet of that spot must succeed on a Swiftness saving throw. On failure, they are Held. On success, they are immune to Hold for the remainder of combat."
    },
    {
      "name": "Spirit Tree",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You tap into the healing powers of mother earth and spring forth a Spirit Tree. Choose a spot within range to set your Spirit Tree. All allies within 30 feet of it regain 1d8 hit points when they end their turn there. The Spirit Tree remains for 1 minute, or until destroyed. It has 30 hit points and an AC of 10.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          }
        ],
        "type": "Health"
      }
    },
    {
      "name": "Carrion Creepers",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You create a creeper patch on a targeted location. This patch snags foes preventing them from jumping or flying while dealing damage. Choose a spot within range to place your Carrion Creepers. Everyone within 30 feet of the creepers must succeed on a Swiftness saving throw. On failure, they take 2d10 Physical damage and are immobilized and slowed. On success, they take no damage but are still immobilized. These creepers remain for 1 minute, and any foe who ends their turn within its range must remake this saving throw.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Fly Trap",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You summon forth a giant carnivorous Fly Trap beast. This creature will fight beside you using attacks and heals. The Fly Trap stat block is below. They act on your Initiative and get one Movement and Act a turn. They remain until you dismiss it, resummon it, or it dies.",
      "minion": {
        "name": "Fly Trap",
        "health": 120,
        "speed": 40,
        "defense": 15,
        "fortitude": 13,
        "might": 14,
        "swiftness": 14,
        "vitality": 14,
        "intelligence": 6,
        "ego": 14,
        "charisma": 6,
        "weaknesses": "Fire",
        "presences": "Toxic, Water",
        "acts": [
          "Entangle (Ranged, +6 to Hit, 3d8 Physical, Immobilized)",
          "Bite (Melee, +6 to Hit, 2d10 Physical)",
          "Healing Pulse (10ft AoE, all allies regain 4d4 hit points)"
        ]
      }
    }
  ],
  "Darkness Melee": [
    {
      "name": "Shadow Punch",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You wrap your fists with energy from the Netherworld and perform a single punch. Make a melee attack against a single foe. On hit, they take 1d10 Darkness damage. This damage increases to 2d10 at Level 5, 3d10 at Level 10, 4d10 at Level 15, and 5d10 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              10
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              10
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              10
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Shadow Maul",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You wrap your entire arms in energy from the Netherworld and perform a quick series of blows. Make a melee attack against a single foe. On hit, they take 2d6 Darkness damage. This damage increases to 3d6 at Level 5, 4d6 at Level 10, 5d6 at Level 15, and 6d6 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              6
            ]
          },
          {
            "level": 5,
            "die": [
              3,
              6
            ]
          },
          {
            "level": 10,
            "die": [
              4,
              6
            ]
          },
          {
            "level": 15,
            "die": [
              5,
              6
            ]
          },
          {
            "level": 20,
            "die": [
              6,
              6
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Build Up",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You pull forth the powers of the Netherworld to empower your next attack. The next melee attack you perform is done with advantage and deals an additional amount of Darkness damage equal to your level. This effect cannot stack."
    },
    {
      "name": "Touch of Fear",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You tap into the Netherworld’s horrible visage and give a single foe a glimpse into it. Make a melee attack against a single foe. On hit, they take 1d8 Darkness damage and are Feared until the start of your next turn. This damage increases to 2d8 at Level 10, 3d8 at Level 15, and 4d8 at Level 20.",
      "effectRoll": {
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
        "type": "Darkness"
      }
    },
    {
      "name": "Shadow Tendrils",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You bring forth the energy of the Netherworld in the form of tendrils that wrap forward from your shadow and grab foes. Everyone within range must succeed on a Swiftness saving throw. On failure, they take 1d10 Darkness damage and are immobilized. On success, they take half damage and are not immobilized. This damage increases to 2d10 at Level 10, 3d10 at Level 15, and 4d10 at Level 20.",
      "area": {
        "size": 15,
        "type": "Cone"
      },
      "effectRoll": {
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
      "name": "Siphon Life",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You tap into the powers of the Netherworld to create a conduit between a foe and yourself. Make a melee attack against a single foe. On hit, they take 2d8 Darkness damage and you regain hit points equal to the damage dealt. This damage increases to 4d8 at Level 15 and 6d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              6,
              8
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Smite",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You overcharge your fists with energy from the Netherworld bringing down a powerful strike on a foe. Make a melee attack against a single foe. On hit, they take 3d10 Darkness damage and giving them -2 to Accuracy rolls on their next turn.",
      "effectRoll": {
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
      "name": "Dark Consumption",
      "activation": "React",
      "stamina": 3,
      "range": 10,
      "description": "You draw forth the life force from all those around you with your energy. As a reaction when hit with an attack, everyone within range must succeed on a Might saving throw. On failure, they take 3d10 Darkness damage and are pulled 5 feet into melee range. On success, they take half damage and aren’t moved.",
      "effectRoll": {
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
      "name": "Soul Drain",
      "activation": "Act",
      "stamina": 3,
      "range": 10,
      "description": "You sap the energy from those around you to fuel your own powers. Make a melee attack against all foes in range. On hit, they take 2d10 Darkness damage and you regain 1 Stamina. On a critical hit, you regain 3 Stamina.",
      "effectRoll": {
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
      "name": "Midnight Hold",
      "activation": "Act",
      "stamina": 5,
      "range": 5,
      "description": "You surround your body in energy from the Netherworld and grapple your foe into darkness. Make a melee attack against a single foe. On hit, they take 5d10 Darkness damage and are grappled. While they remain in your grapple, each turn they take 1d10 Darkness damage.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              5,
              10
            ]
          }
        ],
        "type": "Darkness"
      }
    }
  ],
  "Martial Arts": [
    {
      "name": "Thunder Kick",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You perform a strong front kick on a single foe. Make a melee attack against a single foe. On hit, they take 1d8 Physical damage. This damage increases to 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              8
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Storm Kick",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You perform a spinning back kick to the head of a single foe. Make a melee attack against a single foe. On hit, they take 1d12 Physical damage. This damage increases to 2d12 at Level 10, 3d12 at Level 15, and 4d12 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              12
            ]
          },
          {
            "level": 10,
            "die": [
              2,
              12
            ]
          },
          {
            "level": 15,
            "die": [
              3,
              12
            ]
          },
          {
            "level": 20,
            "die": [
              4,
              12
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Focus Chi",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You tap into your inner chi and focus your strikes for a short time. After you activate this power, all attacks you make until the end of your next turn are done at advantage."
    },
    {
      "name": "Cobra Strike",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You strike at a foe with a quick precision palm strike. Make a melee attack against a single foe. On hit, they take 1d10 Physical damage and are Disoriented until the end of their next turn.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Confront",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You present yourself to a foe as a more worthy opponent. As a reaction, you can take an attack for an ally within 5 feet of you. You take all effects of the attack including damage, status effects, and debuffs."
    },
    {
      "name": "Crane Kick",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You perform a calculated side kick to a single foe. Make a melee attack against a single foe. On hit, they take 2d10 Physical damage and must succeed on a Might saving throw or be pushed back 10 feet. This damage increases to 3d10 at Level 15 and 4d10 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
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
        "type": "Physical"
      }
    },
    {
      "name": "Drum Punch",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You assault the foe with a hand strike from both sides at once. Make a melee attack against a single foe. On hit, they take 2d6 Physical damage. On a critical hit, they are also Disoriented until the end of their next turn. This damage increases to 4d6 at Level 15 and 6d6 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
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
              6,
              6
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Crippling Axe Kick",
      "activation": "Act",
      "stamina": 3,
      "range": 5,
      "description": "You bring down a high stance kick with brutal force to the back of their neck. Make a melee attack against a single foe. On hit, they take 3d8 Physical damage. Because of the nature of this strike your Critical Hit range increases to 18-20 instead of just 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              8
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Dragon’s Tail",
      "activation": "Act",
      "stamina": 3,
      "range": 5,
      "description": "You make a spinning sweep attack with both legs hitting all foes around you. Make a melee attack against all foes within range. On hit, they take 2d10 Physical damage and are knocked prone.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Eagle’s Claw",
      "activation": "Act",
      "stamina": 5,
      "range": 5,
      "description": "You perform a devastating nerve strike with your palm that disorients your foe. Make a melee attack against a single foe. On hit, they take 4d12 Physical damage and are Disoriented until the end of their next turn.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              4,
              12
            ]
          }
        ],
        "type": "Physical"
      }
    }
  ],
  "Robots": [
    {
      "name": "Pulse Blast",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You fire a quick single blast from your pulse rifle. Make a ranged attack against a single foe. On hit, they take 1d8 Energy damage. This damage increases to 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              8
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Summon Drones",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You summon forth one to three Battle Drones to do your bidding. The number of drones depends on your level, increasing to two at Level 5, and three at Level 10. A minion has 1 Act and 1 Reaction per turn along with movement. They go on your initiative. The drones stat black is below.",
      "minion": {
        "name": "Battle Drone",
        "health": 30,
        "speed": 40,
        "defense": 14,
        "fortitude": 12,
        "might": 14,
        "swiftness": 16,
        "vitality": 16,
        "intelligence": 8,
        "ego": 10,
        "charisma": 8,
        "weaknesses": "Sonic, Water",
        "presences": "Lightning",
        "acts": [
          "Laser Blast (+4 to Hit, 2d8 Energy)",
          "Smash (+4 to Hit, 1d10 Physical)"
        ]
      }
    },
    {
      "name": "Pulse Burst",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You fire a quick rapid fire burst from your pulse rifle. Make a ranged attack against a single foe. On hit, they take 2d4 Energy damage. This damage increases to 3d4 at Level 5, 4d4 at Level 10, 5d4 at Level 15, and 6d4 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              4
            ]
          },
          {
            "level": 5,
            "die": [
              3,
              4
            ]
          },
          {
            "level": 10,
            "die": [
              4,
              4
            ]
          },
          {
            "level": 15,
            "die": [
              5,
              4
            ]
          },
          {
            "level": 20,
            "die": [
              6,
              4
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Maintenance",
      "activation": "React",
      "stamina": 2,
      "range": 30,
      "description": "After taking critical damage your robot attempts to some manual self repairs. As a reaction, when hit with an attack you can have one of your minions perform simple maintenance. They regain 2d6 hit points and gain +2 damage to their next attack.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              6
            ]
          }
        ],
        "type": "Health"
      }
    },
    {
      "name": "Photon Grenade",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You launch a photon grenade at a point within range to hit multiple foes. Choose a point within range and everyone within 10 feet of that area must succeed on a Swiftness saving throw. On failure, they take 2d10 Energy damage and are knocked prone. On success, they take 1d10 Energy damage and are not knocked prone.",
      "area": {
        "size": 10,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Summon Protector Bots",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You summon forth one to three Protector Bots to do your bidding. The number of drones depends on your level, increasing to two at Level 15, and three at Level 20. A minion has 1 Act and 1 Reaction per turn along with movement. They go on your initiative. The drones stat black is below.",
      "minion": {
        "name": "Protector Bot",
        "health": 60,
        "speed": 40,
        "defense": 16,
        "fortitude": 16,
        "might": 12,
        "swiftness": 16,
        "vitality": 18,
        "intelligence": 12,
        "ego": 10,
        "charisma": 8,
        "weaknesses": "Sonic, Water",
        "presences": "Lightning",
        "acts": [
          "Laser Blast (+5 to Hit, 2d8 Energy)",
          "Seeker Drone (Release bomb, seeks out nearest enemy they make a Swiftness saving throw. On failure, take 1d10 Fire damage)",
          "Repair (2d6 health for one robot ally)"
        ]
      }
    },
    {
      "name": "Repair",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You call forth one minion to you so you can make quick repairs to its chassis. One Battle Drone of your choice within range regains all their HP, or one Protector Bot/Assault Droid regains 40 HP."
    },
    {
      "name": "Pulse Beam",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You tweak your laser to fire an outward arc beam hitting multiple foes. Everyone within range must succeed on a Swiftness saving throw. On failure, they take 3d10 Energy damage.",
      "area": {
        "size": 15,
        "type": "Cone"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              10
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Summon Assault Droid",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You summon forth a brutal Assault Droid to do your bidding. A minion has 1 Act and 1 Reaction per turn along with movement. They go on your initiative. The drones stat black is below.",
      "minion": {
        "name": "Assault Droid",
        "health": 100,
        "speed": 40,
        "defense": 16,
        "fortitude": 12,
        "might": 18,
        "swiftness": 18,
        "vitality": 18,
        "intelligence": 18,
        "ego": 10,
        "charisma": 8,
        "weaknesses": "Sonic, Water",
        "presences": "Energy, Lightning",
        "acts": [
          "Laser Blast (+6 to Hit, 3d8 Energy)",
          "Laser Beam (15ft Cone, Swiftness saving throw or 3d10 Energy)",
          "Self Destruct (Deals an amount of damage equal to current hit points to both itself and everyone within 10 feet. If an Assault Droid uses this ability, it cannot be resummoned this initiative)"
        ]
      }
    },
    {
      "name": "Upgrade Software",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You quickly recalculate and recalibrate your robotics and upgrade the software in your minions. Each of them gain a bonus to Hit Points equal to your level, a bonus to Accuracy equal to your proficiency bonus, and gain a Flying Speed equal to their Walking Speed."
    }
  ],
  "Web Shooter": [
    {
      "name": "Web Shot",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You shoot forth a single shot from your web shooter. Make a ranged attack against a single foe. On hit, they take 1d6 Force damage. This damage increases to 2d6 at Level 5, 3d6 at Level 10, 4d6 at Level 15, and 5d6 at Level 20.",
      "effectRoll": {
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
        "type": "Force"
      }
    },
    {
      "name": "Impact Web",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You shoot a concentrated shot with high velocity from your web shooter. Make a ranged attack against a single foe. On hit, they take 1d10 Force damage and must succeed on a Might saving throw or be knocked back 10 feet. This damage increases to 2d10 at Level 10, 3d10 at Level 15, and 4d10 at Level 20.",
      "effectRoll": {
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
        "type": "Force"
      }
    },
    {
      "name": "Electro Web",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You overcharge a burst from your web shooter with an electrical charge. Make a ranged attack against a single foe. On hit, they take 1d6 Force damage and 1d8 Lightning damage. This Lightning damage increases to 2d8 at Level 10, 3d8 at Level 15, and 4d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              6
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
        "type": "Force"
      }
    },
    {
      "name": "Double Spray",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You grab onto two targets and pull them into each other with your web shooter. Make a ranged attack against two targets within 30 feet of each other. On hit, you pull them to a central point between them and they take 2d10 Force damage. On a critical hit, they are both knocked prone as well.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Aim",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You hasten your aim after an initial miss in order to successfully strike your foe. As a reaction, if you miss with an attack roll you can roll Accuracy again with advantage."
    },
    {
      "name": "Web Ball",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You spin a single foe into a ball of web and use him to attack foes. Make a ranged attack roll against a single target. On hit, they take 2d10 Force damage and are grappled. While grappled in this manor, you can use them on future turns as a weapon to hit foes. On hit, this grappled enemy deals 2d10 Force damage and themselves take half the damage done.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Sharpshooter Strike",
      "activation": "Act",
      "stamina": 2,
      "range": 120,
      "description": "You hone in for a precision shot from your web shooter from insane range. Make a ranged attack against a single foe. On hit, they take 4d8 Force damage.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              4,
              8
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Web Blast",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You unleash a torrent of webs at all foes in front of you attempting to coat them. Everyone within range must succeed on a Swiftness saving throw. On failure, they take 2d10 Force damage and are immobilized. Additionally, they have disadvantage on contested grapple checks.",
      "area": {
        "size": 15,
        "type": "Cone"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Web Bomb",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You unleash a large web onto area that expands to coat all those around it. Choose a spot within range and everyone with 30 feet of this spot must succeed on a Swiftness saving throw. On failure, they take 3d10 Force damage and are immobilized.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              10
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Spider Spin",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You jump into the air shooting webs in all directions around you. Everyone within 10 feet of you must succeed on a Swiftness saving throw. On failure, they take 8d10 Force damage and are immobilized.",
      "area": {
        "size": 10,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              8,
              10
            ]
          }
        ],
        "type": "Force"
      }
    }
  ],
  "Force Fields": [
    {
      "name": "Deflection Shield",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You encase a single ally inside a deflective shield for 1 minute. For the duration they gain +2 Defense and when attacks manage to get through are reduced by 1d4 damage. This reduction of damage increases as you level up. 1d6 at Level 5, 1d8 at Level 10, 1d10 at Level 15, 1d20 at Level 20.",
      "effectRoll": {
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
      "effectRoll": {
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
      "effectRoll": {
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
        "type": "Force"
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
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Force"
      }
    }
  ],
  "Kinetics": [
    {
      "name": "Transfusion",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You pull forth the life force from a single foe and disperse it between all allies around them. Make a ranged attack against a single foe. On hit, they take 1d12 Force damage and all allies within 10 feet of them receive hit points equal to the damage done. This damage increases to 2d12 at Level 5, 3d12 at Level 10, 4d12 at Level 15, and 5d12 at Level 20.",
      "area": {
        "size": 10,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              12
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              12
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              12
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              12
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              12
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Repel",
      "activation": "React",
      "stamina": 1,
      "range": 30,
      "description": "You use your kinetic force to repel a single enemy coming towards you. As a reaction, when any enemy moves you can make a ranged attack against them. On hit, they take 1d8 Force damage and are knocked back 20 feet.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          }
        ],
        "type": "Force"
      }
    },
    {
      "name": "Siphon Power",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You pull forth power from an enemy draining him and empowering you. Choose a single foe within range and they must succeed on an Ego saving throw. On failure, they gain a -1d4 Debuff to their damage rolls until the end of their next turn, while you gain an additional 1d4 damage on your next attack. This ability can stack until used, up to 6d4 damage.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              4
            ]
          }
        ],
        "type": ""
      }
    },
    {
      "name": "Siphon Speed",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You pull forth speed from an enemy draining him and empowering you. Choose a single foe within range and they must succeed on an Ego saving throw. On failure, their speed is reduced to half its maximum for 1 minute, while you gain the amount they lost to your speed. This ability can stack an unlimited number of times."
    },
    {
      "name": "Siphon Aim",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You pull forth accuracy from an enemy draining him and empowering you. Choose a single foe within range and they must succeed on an Ego saving throw. On failure, they gain a -1d4 Debuff to their Accuracy rolls until the end of their next turn, while you gain advantage on your next attack."
    },
    {
      "name": "Speed Boost",
      "activation": "Act",
      "stamina": 2,
      "range": 60,
      "description": "You fuel a single ally with stored kinetic energy granting them insane speeds. Choose a single ally and they gain double their movement speed for 1 minute."
    },
    {
      "name": "Increase Density",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You increase the density around a single ally, or yourself. Choose an ally within range, or yourself. They are free from any status effect except for Confusion immediately."
    },
    {
      "name": "Inertial Reduction",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You reduce the inertia all around yourself effecting you and all allies. All allies within 30 feet of you when you activate this power gain the Super Jump travel power for 1 minute. This includes all powers therein.",
      "area": {
        "size": 30,
        "type": "Area"
      }
    },
    {
      "name": "Transference",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You transfer all the endurance of those around a single enemy and disperse it to yourself and all allies. Choose a single target within range and they must succeed on an Ego saving throw. On failure, they are Disoriented until the end of their next turn and all allies including yourself within 30 feet of this foe receive 1d8 Stamina.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          }
        ],
        "type": "Stamina"
      }
    },
    {
      "name": "Fulcrum Shift",
      "activation": "Act",
      "stamina": 5,
      "range": 60,
      "description": "You transfer all the power of those around a single enemy and disperse it to yourself and all allies. Choose a single target within range and they must succeed on an Ego saving throw. On failure, they receive -1d10 to all damage rolls for 1 minute, while you and your allies within 30 feet of this foe receive a bonus to damage equal to your level for 1 minute.",
      "area": {
        "size": 30,
        "type": "Area"
      }
    }
  ],
  "Size Manipulation": [
    {
      "name": "Reduce Other",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You shrink a foe slightly altering their effectiveness. Choose a single foe within range and they must succeed on an Ego saving throw. On failure, they shrink one size category and lose -2 Defense, -2 Accuracy rolls, -2 Damage rolls, and their speed is reduced by 10 feet. They can remake this saving throw at the end of their turn to return to normal stature."
    },
    {
      "name": "Enlarge Other",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You enlarge an ally slightly altering their effectiveness. Choose a single ally within range. They grow to size Large and gain +2 Defense, +2 Accuracy rolls, and +2 Damage rolls. This effects lasts until another target is enlarged to Large, or the ally is Held/Slept/Disoriented/Unconscious."
    },
    {
      "name": "Reduce Object",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You shrink down an object to a tiny size. Choose an object of size Huge, Large, or Medium. That object is now considered Tiny. You can store up to 3 Tiny objects at once before the original reverts when attempting a 4th."
    },
    {
      "name": "Enlarge Object",
      "activation": "Act",
      "stamina": 2,
      "range": 60,
      "description": "You enlarge an object to an enormous size. Choose an object of size Tiny. That object is now enlarged up to Medium, Large, or Huge. You can use this in combination with throwing the object in order to smash it into foes. If you choose to do this make a ranged attack roll against a single foe. On hit, they take damage equal to the size you enlarge it to. A medium object hits for 1d10 Physical damage, a Large object hits for 2d10 Physical damage, and a Huge object hits for 3d10 Physical damage. You can only enlarge one object at a time.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Microscopic",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You attempt to shrink down an enemy to a microscopic level. Make a ranged attack against a single foe using their Fortitude. On hit, they are shrunk down to a microscopic level and their hit points become 1. If a creature is immune to status effects, or are of a size Large or higher this attack automatically misses."
    },
    {
      "name": "Gigantic Growth",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You enlarge an ally slightly altering their effectiveness. Choose a single ally within range. They grow to size Huge and gain +3 Defense, +3 Accuracy rolls, and +3 Damage rolls. This effects lasts until another target is enlarged to Huge, or the ally is Held/Slept/Disoriented/Unconscious."
    },
    {
      "name": "Size Flux",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You send the enemy into a flux of sizes causing them to be disoriented. As a reaction, when hit with a melee attack you can cause the enemy to become Disoriented until the start of their next turn."
    },
    {
      "name": "Quick Shrink",
      "activation": "React",
      "stamina": 3,
      "range": "Self",
      "description": "You quickly shrink your body while a foe attempts to attack you causing them to miss. As a reaction, when hit with an attack you can cause the attack to instead miss as you quickly shrink yourself then regrow. You can do this only once per combat encounter."
    },
    {
      "name": "Reduced to Nothing",
      "activation": "Act",
      "stamina": 3,
      "range": 30,
      "description": "You attempt to simply destroy a foe by reducing them to a beyond microscopic level, never to be seen again. Choose a single foe within range and they must succeed on a Vitality saving throw. On failure, they are reduced by one size category per turn until they go beyond Tiny. Each turn they can attempt to remake this saving throw, if they fail their saving throw while Tiny they are destroyed."
    },
    {
      "name": "Colossal Growth",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You grow your own body to gigantic proportions giving a boost to all stats. As an act, you grow to Colossal size and all your base stats increase by 5. You gain +5 bonus to Defense, Accuracy rolls, and Damage rolls. This growth remains as long as you can make a Resolve check at the beginning of each of your turns."
    }
  ],
  "Dark Shroud": [
    {
      "name": "Dark Embrace",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You call upon the energy of the Netherworld to embrace you in darkness. As an act, toggle this power you gain +2 to Defense and Fortitude. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Death Shroud",
      "activation": "Automatic",
      "stamina": 1,
      "range": "Self",
      "description": "You are more comfortable in the darkness with your ties to the Netherworld. While not in direct sunlight or near a source of extreme light you have resistance to Physical damage."
    },
    {
      "name": "Murky Cloud",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You bring forth a murky cloud of darkness from the Netherworld to shield you against elemental damages. As an act, toggle this power you gain resistance to Energy, Fire, Ice, Lightning, and Water damage. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Mists of Decay",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You bring forth angry shadows from your form to harm foes around you. As an act, toggle this power and everyone within range must succeed on a Vitality saving throw. On failure, they take 1d6 Darkness damage. If a foe ends their turn within this range, they must make this saving throw again.",
      "area": {
        "size": 5,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              6
            ]
          }
        ],
        "type": "Darkness"
      }
    },
    {
      "name": "Obsidian Shield",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You supplant your mind with shades of darkness freeing you from status effects. As a reaction, if you are hit with an attack that causes you to become Immobilized, Held, Slept, Disoriented, or Feared you can end this effect immediately."
    },
    {
      "name": "Dark Regeneration",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You reach out with your darkness and leech the life force of those around you. As an act, everyone within range must succeed on a Vitality saving throw. On failure, they take 2d10 Darkness damage and you regain hit points equal to the damage dealt. This damage increases to 3d10 at Level 15 and 4d10 at Level 20.",
      "area": {
        "size": 10,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
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
      "name": "Mind of Shadows",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You coat your sub consciousness in energy from the Netherworld protecting from non-physical damages. As an act, toggle this power you gain resistance to Poison, Psychic, and Sonic damage. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Cloak of Fear",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You wrap yourself in nightmarish visions twisted from the shadows. As an act, everyone within range must succeed on an Ego saving throw. On failure, they are Feared of you for 1 minute, or until they break free with a successful Resolve check at the end of their turn.",
      "area": {
        "size": 10,
        "type": "Area"
      }
    },
    {
      "name": "Oppressive Gloom",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You overwhelm the minds of those around you with Netherworld energy causing them to be stunned. As an act, everyone within range must succeed on a Vitality saving throw. On failure, they become Disoriented for 1 minute, or they break free with a successful Resolve check at the end of their turn.",
      "area": {
        "size": 10,
        "type": "Area"
      }
    },
    {
      "name": "Soul Transfer",
      "activation": "React",
      "stamina": 5,
      "range": "Self",
      "description": "After falling in battle you can call forth the Netherworld to send you back sapping the life of all around you. As a reaction, when you fall to 0 hit points whether unconscious or dead you return to life. Everyone you choose within range must succeed on a Vitality saving throw. On failure, they take 4d10 Darkness damage and are Immobilized until the start of their next turn. You regain hit points equal to the damage dealt. On success, they take half damage and are not immobilized.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              4,
              10
            ]
          }
        ],
        "type": "Darkness"
      }
    }
  ],
  "Darkness Control": [
    {
      "name": "Shadowy Binds",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You take control of your victim’s shadow causing it to entangle them in place and take a small amount of damage. Make a ranged attack against a single target. On hit, they take 1d6 Darkness damage and must succeed on a Swiftness saving throw or become Immobilized. This damage increases to 2d6 at Level 5, 3d6 at Level 10, 4d6 at Level 15, and 5d6 at Level 20.",
      "effectRoll": {
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
      "description": "You take control of your victim’s shadow to wholly envelop them, leaving them held and helpless. Choose a single foe within range and they must succeed on a Swiftness saving throw or become Held. On success, they are immune to Hold for this combat."
    },
    {
      "name": "Negative Strike",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You pull forth a part of your own shadow to swipe at the foe with an arc of darkness. Make a melee attack against a single target. On hit, they take 1d10 Darkness damage. This damage increases to 2d10 at Level 10, 3d10 at Level 15, and 4d10 at Level 20.",
      "effectRoll": {
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
        "type": "Cone"
      }
    },
    {
      "name": "Fearsome Stare",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You instill tremendous fear to all those in front of you. All foes in range must succeed on an Ego saving throw or become Feared. Additionally, at the beginning of every turn they are Feared including when the power is used they take 1d8 Darkness damage. This damage increases to 2d8 at Level 15 and 3d8 at Level 20.",
      "area": {
        "size": 20,
        "type": "Cone"
      },
      "effectRoll": {
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
      "description": "In a burst of negative energy you overwhelm the minds of those around you causing them to be stunned and suffer damage. Each foe within 30 feet of you must succeed on a Vitality saving throw or become Disoriented. Additionally, they take 3d10 Darkness damage. They take half damage on a successful save and are not Disoriented.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
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
      "effectRoll": {
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
      "description": "You blanket a huge area in darkness. Any foe who enters this area will have a chance to be held and take damage. Choose an area within range, and every foe in a 30ft circle from that location must make a Swiftness saving throw or take 2d10 Darkness damage and become Held. This field stands for the next 1 minute and any foe entering for the first time or ending a turn inside this makes this saving throw. On success, they are immune to this Shadow Field.",
      "area": {
        "size": 30,
        "type": "Area"
      },
      "effectRoll": {
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
    }
  ],
  "Electric Control": [
    {
      "name": "Electric Fence",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You surround and immobilize a single target in an electric field. Make a ranged attack against a single target. On hit, they take 1d8 Lightning damage and make a Swiftness saving throw or become Immobilized. The damage increases to 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              8
            ]
          }
        ],
        "type": "Lightning"
      }
    },
    {
      "name": "Tesla Cage",
      "activation": "Act",
      "stamina": 1,
      "range": 60,
      "description": "You incase a single foe in an electric cage preventing them from acting. Make a ranged attack against a single target. On hit, they are Held."
    },
    {
      "name": "Jolting Chain",
      "activation": "Act",
      "stamina": 1,
      "range": 30,
      "description": "You hit a single target with a bolt of lightning that then has a chance to chain to those around him. Make a ranged attack against a single target. On hit, they take 2d8 Lightning damage and each foe within 10 feet of the target must make a  Swiftness saving throw or take 1d8 Lightning damage.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              8
            ]
          }
        ],
        "type": "Lightning"
      }
    },
    {
      "name": "Chain Fences",
      "activation": "Act",
      "stamina": 2,
      "range": 30,
      "description": "You hit a single target with an immobilizing attack that then has a chance to chain this immobilization around him. Make a ranged attack against a single target. On hit, they take 1d8 Lightning damage and are Immobilized and each foe within 10 feet of the target must make a Swiftness saving throw or be Immobilized.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          }
        ],
        "type": "Lightning"
      }
    },
    {
      "name": "Conductive Aura",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "If you activate this power, the air around you becomes charged with electricity, leaping out and shocking foes that get too close. As an Act, toggle this power. Each foe that ends their turn within 5ft of you must make a Swiftness saving throw or take 1d6 Lightning damage and you recover 1d4 Stamina Point. The damage increases to 2d6 at Level 15 and 3d6 at Level 20. The recovery increases to 2d4 at Level 15 and 3d4 at Level 20. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops.",
      "area": {
        "size": 5,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              6
            ]
          },
          {
            "level": 15,
            "die": [
              2,
              6
            ]
          },
          {
            "level": 20,
            "die": [
              3,
              6
            ]
          },
          {
            "level": 15,
            "die": [
              2,
              4
            ]
          },
          {
            "level": 20,
            "die": [
              3,
              4
            ]
          }
        ],
        "type": "Lightning"
      }
    },
    {
      "name": "Disorienting Zap",
      "activation": "Act",
      "stamina": 2,
      "range": 60,
      "description": "You shoot out a thin bolt of lightning in an attempt to disorient a single foe. Make a ranged attack against a single target. On hit, they take 2d10 Lightning damage and are Disoriented until the start of their next turn. This damage increases to 3d10 at Level 15 and 4d10 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
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
        "type": "Lightning"
      }
    },
    {
      "name": "Static Field",
      "activation": "Act",
      "stamina": 2,
      "range": 60,
      "description": "You create a large field of electricity in a point ensnaring all foes within. Choose a spot within range and all foes within 20 feet of that point must make Swiftness saving throw or they become Immobilized.",
      "area": {
        "size": 20,
        "type": "Area"
      }
    },
    {
      "name": "Paralyzing Blast",
      "activation": "Act",
      "stamina": 3,
      "range": 60,
      "description": "You create a massive shockwave blast centered on a location. Choose a spot within range and all foes within 20 feet of that point must make a Swiftness saving throw or take 4d8 Lightning damage and become Held. On success, they take half damage and are not Held.",
      "area": {
        "size": 20,
        "type": "Area"
      },
      "effectRoll": {

        "scale": [
          {
            "level": 1,
            "die": [
              4,
              8
            ]
          }
        ],
        "type": "Lightning"
      }
    },
    {
      "name": "Synaptic Overload",
      "activation": "Act",
      "stamina": 3,
      "range": 30,
      "description": "You try to overload the brain of a single foe and attempt to chain this focus to others around him. Make a ranged attack against a single foe. On hit, they take 2d10 Lightning damage and become Confused. All foes within 10 feet of this target must succeed on an Ego saving throw or also become Confused.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Lightning"
      }
    },
    {
      "name": "Gremlins",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You form two beings of pure lightning energy into humanoid forms. These creatures will fight beside you using shock and lightning attacks. The Electric Gremlin stat block is below. They act on your Initiative and get one Movement and Action a turn. They remain until you dismiss them, resummons them, or they die.",
      "minion": {
        "name": "Electric Gremlin",
        "health": 45,
        "speed": 30,
        "defense": 14,
        "fortitude": 12,
        "might": 18,
        "swiftness": 13,
        "vitality": 18,
        "intelligence": 8,
        "ego": 10,
        "charisma": 6,
        "weaknesses": "Force",
        "presences": "Lightning",
        "acts": [
          "Electric Shock (Melee, +7 to Hit, 2d8 Lightning damage)",
          "Tesla Cage (Range, +4 to Hit, Foe is Held)"
        ]
      }
    }
  ],
  "Energy Melee": [
    {
      "name": "Barrage",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You coat your fists in a flurry of energy and deliver two quick blows. Make a melee attack against a single target. On hit, they take 2d4 Energy damage. This damage increases to 3d4 at Level 5, 4d4 at Level 10, 5d4 at Level 15, and 6d4 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              4
            ]
          },
          {
            "level": 5,
            "die": [
              3,
              4
            ]
          },
          {
            "level": 10,
            "die": [
              4,
              4
            ]
          },
          {
            "level": 15,
            "die": [
              5,
              4
            ]
          },
          {
            "level": 20,
            "die": [
              6,
              4
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Energy Punch",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You deliver a single haymaker punch with an energy burst. Make a melee attack against a single target. On hit, they take 1d6 Energy damage and they must succeed on a Vitality saving throw or become Disoriented until the end of their next turn. This damage increases to 2d6 at Level 5, 3d6 at Level 10, 4d6 at Level 15, and 5d6 at Level 20.",
      "effectRoll": {
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
        "type": "Energy"
      }
    },
    {
      "name": "Build Up",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You tap into your energy to empower your next attack. The next melee attack you perform is done with advantage and deals an additional amount of Energy damage equal to your level. This effect cannot stack."
    },
    {
      "name": "Bone Smasher",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You fists teem with energy and you deliver a smashing double axe handle blow. Make a melee attack against a single target. On hit, they take 1d10 Energy damage and they must succeed on a Might saving throw or be pushed back 10 feet. This damage increases to 2d10 at Level 10, 3d10 at Level 15, and 4d10 at Level 20.",
      "effectRoll": {
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
        "type": "Energy"
      }
    },
    {
      "name": "Confront",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You present yourself to a foe as a more worthy opponent. As a reaction, you can take an attack for an ally within 5 feet of you. You take all effects of the attack including damage, status effects, and debuffs."
    },
    {
      "name": "Whirling Hands",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You focus your energy into the muscles in your arms and deliver a dizzying spin attack to all foes around you. Everyone within range must succeed on a Swiftness saving throw. On failure, they take 1d10 Energy damage. On success, they take half damage. This damage increases to 2d10 at Level 15 and 3d10 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 15,
            "die": [
              2,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              3,
              10
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Stun",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You focus your internal energy into a shockwave as you hit the ground. Everyone within range must succeed on a Swiftness saving throw. On failure, they are Disoriented until the end of their next turn. On success, they are immune to Disorient for the rest of this combat.",
      "area": {
        "size": 10,
        "type": "Area"
      }
    },
    {
      "name": "Total Focus",
      "activation": "Act",
      "stamina": 3,
      "range": 5,
      "description": "You have complete mastery over your energy and channel it into a slow but devastating attack that crushes a single foe. Make a melee attack against a single target. On hit, they take 3d12 Energy damage and are knocked prone.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              12
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Overdrive Burst",
      "activation": "React",
      "stamina": 3,
      "range": 30,
      "description": "You release stored energy within your body after a foe hits you fighting back. As a reaction, when you are hit with an attack you can explode with energy. Everyone of your choice within range must succeed on a Swiftness saving throw. On failure, they take 2d10 Energy damage. On success, they take half damage.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Energy Transfer",
      "activation": "Act",
      "stamina": 5,
      "range": 5,
      "description": "Your mastery of energy allows you to tap into your own Vitality to transfer it into a vicious knockout attempt. Make a melee attack against a single target. On hit, they take Energy damage equal to an amount of your choice from 1 to 100 and you take this same amount of damage ignoring all Prescences you have."
    }
  ],
  "Invulnerability": [
    {
      "name": "Resist Physical Damage",
      "activation": "Automatic",
      "stamina": 0,
      "range": "Self",
      "description": "You are naturally tough and resistant to physical attacks. You gain resistance to Physical damage taking half damage from those attacks."
    },
    {
      "name": "Dull Pain",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You quickly dull the pain within yourself and heal a small amount. You regain 1d10 Hit Points. This healing increases to 2d10 at Level 5, 3d10 at Level 10, 4d10 at Level 15, and 5d10 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              10
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              10
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              10
            ]
          }
        ],
        "type": "Health"
      }
    },
    {
      "name": "Temporary Invulnerability",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You tap into your inner invulnerability to gain extra defense. As an act, toggle this power you gain +3 to Defense. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Resist Elements",
      "activation": "Automatic",
      "stamina": 0,
      "range": "Self",
      "description": "You are naturally tough and resistant to elemental attacks. You gain resistances to Fire, Ice, Lightning, and Water damage taking half damage from those attacks."
    },
    {
      "name": "Resist Energies",
      "activation": "Automatic",
      "stamina": 0,
      "range": "Self",
      "description": "You are naturally tough and resistant to energy attacks. You gain resistances to Energy and Force damage taking half damage from those attacks."
    },
    {
      "name": "Unyielding",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You tap into your inner strength and shrug off a status effect immediately. As a reaction, when you are hit with an effect that makes you Immobilized, Held, Slept, Disoriented, Slowed, or Feared the effect is nullified."
    },
    {
      "name": "Invincibility",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "Your natural defenses increase for each foe around you as your brace for impact. Each foe within range must succeed on a Vitality saving throw. On failure, you gain +1 Defense for each foe. On success, nothing happens.",
      "area": {
        "size": 10,
        "type": "Area"
      }
    },
    {
      "name": "Resist Psionic",
      "activation": "Automatic",
      "stamina": 0,
      "range": "Self",
      "description": "You are naturally tough and resistant to elemental attacks. You gain resistance to Psychic damage taking half damage from those attacks."
    },
    {
      "name": "Tough Mind",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You tap into your mind’s invulnerability to gain extra fortitude. As an act, toggle this power you gain +5 to Fortitude. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Unstoppable",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You become an unstoppable force for a short burst of time. For 1 minute, when you activate this power you gain +5 to Defense and Fortitude and gain resistance to Darkness, Luminous, Poison, and Sonic damage. After this minute is over you become Disoriented until the end of your next turn."
    }
  ],
  "Radiation Aura": [
    {
      "name": "Alpha Barrier",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You cloak yourself in a field of protective radiation that grants an increase to defense. As an Act, toggle this power your Defense increases by 2. This increases as you level +3 at Level 5, +4 at Level 10, +5 at Level 15, and +6 at Level 20. A toggled power remains active until you toggle it off, or you are held/slept/disoriented."
    },
    {
      "name": "Gamma Boost",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You increase the gamma within your body to boost your regeneration for a moment. As an Act, you heal 1d8 + Vitality hit points. This healing increases as you level 2d8 at Level 5, 3d8 at Level 10, 4d8 at Level 15, and 5d8 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              8
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              8
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              8
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              8
            ]
          }
        ],
        "type": "+ Vitality Health"
      }
    },
    {
      "name": "Beta Barrier",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You cloak your mind in a protective shielding of radiation that grants an increase to fortitude. As an Act, toggle this power your Fortitude increases by +1. This increases as you level +2 at Level 5, +3 at Level 10, +4 at Level 15, and +5 at Level 20. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Proton Armor",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You quickly increase the amount of radiation around you to shield yourself from energy attacks. As an Act, toggle this power you gain resistance to Energy, Fire, Ice, Lightning, and Water damage taking half damage from attacks. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Fallout Shelter",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You flex a burst of radiation around you freeing yourself from all status effects. When you activate this power, as an Act, any status effect upon you is instantly ended, with the exception of Disoriented."
    },
    {
      "name": "Radiation Therapy",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You concentrate your energies to harness a long term regeneration boost to mend your wounds closed. Make a melee attack against everyone within 5ft around you. On hit, each enemy takes 1d10 Energy damage and you regain Hit Points equal to the damage dealt.",
      "area": {
        "size": 5,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Decay",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You disperse a small amount of radiation in the area immediately around you slowly draining your foes. As an Act for 1 minute, you have an aura 10 feet around you. Any enemy within this aura when cast or if they end their turn within it take 1d8 Energy damage and get a -2 penalty on their to hit rolls and saving throws.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              8
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Particle Shielding",
      "activation": "React",
      "stamina": 3,
      "range": "Self",
      "description": "You channel a tremendous amount of radiation into a bubble around you. As a reaction, when hit with an attack you gain a protective bubble that grants you resistance to all damage until the start of your next turn including the triggering attack."
    },
    {
      "name": "Ground Zero",
      "activation": "Act",
      "stamina": 3,
      "range": "Self",
      "description": "You release a mixture of radiation into the area, all nearby foes are barraged with harmful radiation and shredding their defenses. Make a melee attack against all targets within range, on hit they take 3d10 Energy damage and they get -4 Defense until the start of your next turn.",
      "area": {
        "size": 5,
        "type": "Area"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              10
            ]
          }
        ],
        "type": "Energy"
      }
    },
    {
      "name": "Total Meltdown",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "After you build up a dangerous amount of radiation you release it as both a shield and to empower yourself. As an Act, until the start of your next turn, you gain +5 to Defense and Fortitude. Additionally, you gain +2 to your to hit and damage rolls for melee attacks."
    }
  ],
  "Super Reflexes": [
    {
      "name": "Focused Fighting",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You become more focused in your combat prowess.  As an Act, toggle this power to increase your damage by +2 for all attacks. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops."
    },
    {
      "name": "Focused Senses",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You become more focused with your mind. As an Act, toggle this power to increase your Fortitude by +2. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops. This increases to +3 at Level 5, +4 at Level 10, +5 at Level 15, and +6 at Level 20."
    },
    {
      "name": "Focused Defenses",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You become more focused with your body. As an Act, toggle this power to increase your Defense by +2. A toggled power remains active until you toggle it off as a free action, or you are held/slept/disoriented where it immediately drops. This increases to +3 at Level 5, +4 at Level 10, +5 at Level 15, and +6 at Level 20."
    },
    {
      "name": "Agile",
      "activation": "Automatic",
      "stamina": 0,
      "range": "Self",
      "description": "You are more naturally agile with your reflexes. You gain natural resistance to Physical attacks with your agile movements taking half damage from those attacks."
    },
    {
      "name": "Practiced Brawler",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "Your training allows you to shrug off status effects as a practiced brawler. As an Act, you can end any Immobilize, Held, Slept, or Feared effect on yourself immediately."
    },
    {
      "name": "Uncanny Dodge",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You use your ability to dodge out of danger to lessen the effects of an attack. As a Reaction, whenever you are hit with an attack you can half the damage done to you."
    },
    {
      "name": "Quickness",
      "activation": "Automatic",
      "stamina": 0,
      "range": "Self",
      "description": "Your natural reflexes allow you to move quicker and resist slowing effects. You gain an additional 10ft of movement, gain a +3 bonus to Initiative rolls, and are immune to the Slowed condition."
    },
    {
      "name": "Lucky",
      "activation": "React",
      "stamina": 3,
      "range": "Self",
      "description": "You use your steel mind to avoid all damage from a mental barrage. As a Reaction, when a foe has you make an Ego saving throw you can choose to automatically pass instead of rolling."
    },
    {
      "name": "Evasion",
      "activation": "React",
      "stamina": 3,
      "range": "Self",
      "description": "You use your uncanny abilities to avoid all damage from an attack. As a Reaction, when a foe has you make a Swiftness saving throw you can choose to automatically pass instead of rolling."
    },
    {
      "name": "Elude",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You improve your reflexes to a point of almost perfect avoidance. For 1 minute, you gain +10 to your Defense. This effect can only be used once per combat encounter."
    }
  ],
  "Titan Weapon Fighting": [
    {
      "name": "Crushing Blow",
      "activation": "Act",
      "stamina": 1,
      "range": 5,
      "description": "You swing a vicious crushing blow at one foe. Make a melee attack against a single target. On hit, they take 1d10 Physical damage. This damage increases to 2d10 at Level 5, 3d10 at Level 10, 4d10 at Level 15, and 5d10 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              10
            ]
          },
          {
            "level": 5,
            "die": [
              2,
              10
            ]
          },
          {
            "level": 10,
            "die": [
              3,
              10
            ]
          },
          {
            "level": 15,
            "die": [
              4,
              10
            ]
          },
          {
            "level": 20,
            "die": [
              5,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Defensive Sweep",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You take a defensive stance and swipe out at all foes in front of you. Make a melee attack against everyone in range. On hit, they take 1d6 Physical damage and you gain +1 Defense until the start of your next turn. This damage increases to 2d6 at Level 5, 3d6 at Level 10, 4d6 at Level 15, and 5d6 at Level 20.",
      "area": {
        "size": 10,
        "type": "Cone"
      },
      "effectRoll": {
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
        "type": "Physical"
      }
    },
    {
      "name": "Build Momentum",
      "activation": "Act",
      "stamina": 1,
      "range": "Self",
      "description": "You brace yourself to build momentum for your next brutal swing. As an Act, the next Titan Weapon attack you use is done with advantage and deals additional damage equal to your level."
    },
    {
      "name": "Titan Sweep",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You make a sweeping slash hitting all foes around you. Everyone within range must succeed on a Swiftness saving throw. On failure, they take 1d10 Physical damage and are knocked prone. On success, they take half damage and are not knocked prone. This damage increases to 2d10 at Level 10, 3d10 at Level 15, and 4d10 at Level 20.",
      "area": {
        "size": 5,
        "type": "Area"
      },
      "effectRoll": {
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
        "type": "Physical"
      }
    },
    {
      "name": "Confront",
      "activation": "React",
      "stamina": 2,
      "range": "Self",
      "description": "You present yourself to a foe as a more worthy opponent. As a reaction, you can take an attack for an ally within 5 feet of you. You take all effects of the attack including damage, status effects, and debuffs."
    },
    {
      "name": "Follow Through",
      "activation": "Act",
      "stamina": 2,
      "range": 5,
      "description": "You follow through on your momentum to slam down on a single foe. Make a melee attack against a single target. On hit, they take 1d12 Physical damage and must succeed on a Might saving throw or be knocked prone. If this attack is used after using Build Momentum treat any d12 that would be rolled as a 12. This damage increases to 2d12 at Level 15 and 3d12 at Level 20.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              1,
              12
            ]
          },
          {
            "level": 15,
            "die": [
              2,
              12
            ]
          },
          {
            "level": 20,
            "die": [
              3,
              12
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Vicious Windmill",
      "activation": "Act",
      "stamina": 2,
      "range": "Self",
      "description": "You twirl your weapon in a vicious windmill striking twice at each foe in front of you. Make a melee attack against everyone in range. On hit, they take 2d10 Physical damage and are knocked 5ft to the left or right and you occupy their former space. Moving out of their range does not provoke an opportunity attack.",
      "area": {
        "size": 20,
        "type": "Line"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              2,
              10
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Rend Armor",
      "activation": "Act",
      "stamina": 3,
      "range": 5,
      "description": "You batter a single foe with an armor shattering strike. Make a melee attack against a single target. On hit, they take 3d12 Physical damage and lose -3 Defense until the start of your next turn.",
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              3,
              12
            ]
          }
        ],
        "type": "Physical"
      }
    },
    {
      "name": "Momentous Rebuttal",
      "activation": "React",
      "stamina": 3,
      "range": 5,
      "description": "You lash out at a foe with all your momentum as they strike you. As a Reaction, when hit with a melee attack while you are under the effects of Build Momentum you can strike back at the foe. Make a melee attack against them at advantage. On hit, they take 50 Physical damage and you lose your Build Momentum effect."
    },
    {
      "name": "Arc of Destruction",
      "activation": "Act",
      "stamina": 5,
      "range": "Self",
      "description": "You step forward delivering a massive arc of destruction harming foes and knocking them down. As an Act, everyone in range must succeed on a Swiftness saving throw. On failure, take 4d12 Physical damage and are knocked prone. On success, they take half damage and are not knocked prone.",
      "area": {
        "size": 20,
        "type": "Cone"
      },
      "effectRoll": {
        "scale": [
          {
            "level": 1,
            "die": [
              4,
              12
            ]
          }
        ],
        "type": "Physical"
      }
    }
  ]
}
);
