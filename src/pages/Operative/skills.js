import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}
function flat (rank, level, unit) {
  return Math.floor(rank * unit);
}
function flatCeil (rank, level, unit) {
  return Math.ceil(rank * unit);
}
/* some skills increase by an amount that decreases by a constant factor each time */
function decreasingAddition (rank, level, unit, multiplier) {
  if (rank === 0) {
    return 0;
  }
  return Math.floor((Math.pow(multiplier, rank - 1) * unit) + decreasingAddition(rank - 1, level, unit, multiplier))
}

/* There are skills that dont follow a linear patch for some increases. Data came from official builder.*/

// Ready For Action Shield Recharge Delay
function getReadyForActionShieldRechargeDelay(rank) {
  switch (rank) {
    case 1:
      return 7;
    case 2:
      return 14;
    case 3:
      return 19;
    case 4:
      return 24;
    case 5:
      return 29;
    default:
      return 0;
  }
}

// Stiff Upper Lip Damage Resistance
function getStiffUpperLipDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 6;
    case 2:
      return 12;
    case 3:
      return 16;
    default:
      return 0;
  }
}

// Nerves Of Steel Handling
function getNervesOfSteelHandling(rank) {
  switch (rank) {
    case 1:
      return 2.4;
    case 2:
      return 4.8;
    case 3:
      return 7.0;
    default:
      return 0;
  }
}

// Cool Hand Reload Speed
function getCoolHandReloadSpeed(rank) {
  switch (rank) {
    case 1:
      return 2.9;
    case 2:
      return 5.7;
    case 3:
      return 8.3;
    case 4:
      return 10.7;
    case 5:
      return 13;
    default:
      return 0;
  }
}

/* eslint-disable quotes */
const skills = {
  "Under Cover": {
    "0": {
      "Barrier": {
        text: "Drop a deployable Barrier that blocks incoming projectiles. Zane and his allies can shoot through the Barrier, dealing increased Gun Damage. Pressing LB or RB (controller) while Barrier is active picks up and holds the Barrier, but the size and bonuses are decreased.",
        effect: (rank, level) => `Duration 14 sec, Cooldown 24 sec, Damage Amp +25%`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Adrenaline": {
        text: "Zane gains increased Action Skill Cooldown Rate. This bonus is based on the amount of shield he has. The more percent full, the greater the bonus.",
        ranks: 5,
        effect: (rank, level) => `Action Skill Cooldown Rate - Up to +${percent(rank, 7)}%`,
      },
      "Hearty Stock": {
        text: "Zane gains increased Maximum Shield Capacity.",
        ranks: 3,
        effect: (rank, level) => `Max Shield +${percent(rank, 10)}%`,
      },
      "Ready for Action": {
        text: "Zane gains improved Shield Recharge Rate and Shield Recharge Delay.",
        ranks: 5,
        effect: (rank, level) => `Shield Recharge Rate +${percent(rank, 6)}%, Shield Recharge Delay -${getReadyForActionShieldRechargeDelay(rank)}%`,
      },
    },
    "2": {
      "Charged Relay": {
        text: "Whenever Zane or an ally touches the Barrier, they gain increased Movement Speed and Reload Speed for a few seconds.",
        ranks: 0,
        effect: (rank, level) => `Reload Speed +20%, Movement Speed +11%, Duration 8 sec after moving away from barrier`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Brainfreeze": {
        text: "Whenever Zane scores a Critical Hit on an enemy, there's a chance they will be Slowed.",
        ranks: 5,
        effect: (rank, level) => `Slow Chance ${percent(rank, 4)}%`,
      },
      "Stiff Upper Lip": {
        text: "Whenever Zane is damaged, he gains Damage Resistance against that damage type.",
        ranks: 3,
        effect: (rank, level) => `Damage Resistance +${getStiffUpperLipDamageResistance(rank)}%`,
      },
      "Rise to the Occasion": {
        text: "Zane gains Health Regeneration. The lower his shield is, the higher the bonus. While Zane's shields are full, he does not receive any health regeneration.",
        ranks: 5,
        effect: (rank, level) => `Health Regeneration up to +${percent(rank, 1)}% of Max Health`,
      },
    },
    "3": {
      "Nanites or Some Shite": {
        text: "Zane and his allies gain Health Regeneration, increased Reload Speed, and greatly improved Shield Recharge Delay while near his Barrier. The lower his health, the more health is regenerated.",
        ranks: 0,
        effect: (rank, level) => `Health Regeneration up to 4% of Max Health, Shield Recharge Delay -33%, Reload Speed +11%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Confident Competence": {
        text: "While Zane's shields are active, he gains increased Gun Damage and Accuracy. This bonus is based on the amount of shields he has. The more percent full, the greater the bonus.",
        ranks: 1,
        effect: (rank, level) => `Gun Damage up to +20%, Accuracy up to +33%`,
      },
      "All-rounder": {
        text: "Zane's Barrier becomes a dome, covering all sides.",
        ranks: 0,
        effect: (rank, level) => `Barrier cooldown +20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Redistribution": {
        text: "Zane and allies near the Barrier gain increased Gun Damage for a few seconds after the Barrier takes damage.",
        ranks: 0,
        effect: (rank, level) => `Gun Damage +10%, Duration 3 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Really Expensive Jacket": {
        text: "Elemental damage over time effects applied to Zane have reduced duration.",
        ranks: 1,
        effect: (rank, level) => `Elemental Effect Duration -50%`,
      },
      "Best Served Cold": {
        text: "Whenever Zane kills an enemy, they create a Cryo Nova, dealing damage to all nearby enemies. This skill has a short cooldown.",
        ranks: 5,
        effect: (rank, level) => `Damage ${flat(rank, level, 2.2)}, Cooldown 3 sec`,
      },
      "Futility Belt": {
        text: "Zane gains resistance to non-elemental damage. Kill Skill - All elemental damage Zane takes is converted to non-elemental damage.",
        ranks: 1,
        effect: (rank, level) => `Damage Reduction +15%, Duration 8 sec`,
      },
      "Deterrence Field": {
        text: "Enemies that touch the Barrier take Shock Damage and are staggered.",
        ranks: 0,
        effect: (rank, level) => `Shock Damage ${flat(1, level, 27)}`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Refreshment": {
        text: "Whenever Zane damages a frozen enemy with his weapon, he gains some of that damage back as health.",
        ranks: 3,
        effect: (rank, level) => `Life Steal ${percent(rank, 8)}% of damage dealt`,
      },
      "Calm, Cool, Collected": {
        text: "Whenever Zane Freezes an enemy, his shield instantly begins recharging. If Zane's shields are already full, he regenerates health for a few seconds. If Zane's health is already full, his Action Skill Cooldowns and Durations are immediately reset.",
        ranks: 1,
        effect: (rank, level) => `Health Regeneration up to 3% max health, Regeneration Duration 3 sec`,
      },
      "Nerves of Steel": {
        text: "Zane gains increasing Accuracy and Handling. The longer his shield is full, the greater the bonus.",
        ranks: 3,
        effect: (rank, level) => `Accuracy +${percent(rank, 2)}% per sec, Handling +${getNervesOfSteelHandling(rank)}% per sec, 15 Max Stacks`,
      },
    },
    "6": {
      "Distributed Denial": {
        text: "Zane's barrier gains the effects of his currently equipped Shield Mod. Additionally, shield effects are applied to all allies near the barrier. Bonuses to Zane are reduced.",
        ranks: 1,
      },
    },
  },
  "Hitman": {
    "0": {
      "SNTNL": {
        text: "Send into battle an automated SNTL drone that continually flies through the environment and attacks enemies with its Machine Guns. Pressing LB or RB (controller) while SNTNL is active causes it to attack the enemy under Zane's crosshairs, if any.",
        effect: (rank, level) => `Machine Gun Damage: ${flat(rank, level, 4)}, Duration: 24 sec, Cooldown: 60 sec`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      }
    },
    "1": {
      "Violent Speed": {
        text: "After killing an enemy, Zane gains increased Movement Speed for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Movement Speed +${percent(rank, 4)}%, Duration 8 sec`,
      },
      "Cold Bore": {
        text: "Zane gains increased Weapon Swap Speed. The next shot fired after swapping weapons deals Bonus Cryo Damage.",
        ranks: 5,
        effect: (rank, level) => `Weapon Swap Speed +${decreasingAddition(rank, level, 13, 0.82)}%, Bonus Cryo Damage ${percent(rank, 6)}%`,
      },
      "Violent Momentum": {
        text: "Zane's Gun Damage is increased while moving. The quicker he moves, the greater the Gun Damage bonus.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage +${percent(rank, 4)}% at regular walk speed`,
      },
    },
    "2": {
      "Winter's Drone": {
        text: "Converts SNTNL's primary weapons to Cryo Damage.",
        ranks: 0,
        effect: (rank, level) => `Drone Damage: -20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Cool Hand": {
        text: "Zane gains increased Reload Speed. After killing an enemy, Zane's Reload Speed is increased for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Reload Speed +${getCoolHandReloadSpeed(rank)}% (+${flatCeil(rank, level, 3.4)}% after kill), Duration 8 sec `,
      },
      "Drone Delivery": {
        text: "SNTRY will occasionally drop a free grenade based on your current grenade mod while attacking enemies.",
        ranks: 1,
        effect: (rank, level) => `Cooldown 15 sec`,
      },
      "Salvation": {
        text: "After killing an enemy, Zane's weapons gain Life Steal for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Life Steal ${percent(rank, 2)}% of damage, Duration 8 sec`,
      },
    },
    "3": {
      "Bad Dose": {
        text: "SNTNL occasionally shoots out a beam of Radiation that weakens enemies and buffs Zane.",
        ranks: 0,
        effect: (rank, level) => `Fire Rate +2% per enemy, Movement Speed +6% per enemy, Damage ${flat(rank, level, 4)}, Duration 12 sec, Cooldown 8 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Death Follows Close": {
        text: "All of Zane's kill skills gain increased effect and duration.",
        ranks: 1,
        effect: (rank, level) => `Kill Skill Duration +7 sec, Kill Skill Bonus +25%`,
      },
      "Static Field": {
        text: "SNTNL emits a static field that sends a Shock beam to nearby enemies, draining their shields and replenishing Zane's.",
        ranks: 0,
        effect: (rank, level) => `Shield Damage ${flat(rank, level, 2)} per sec, Cooldown 2 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Boomsday": {
        text: "SNTNL adds a rocket pod to its primary weapons, allowing it to shoot rockets as well as machine guns.",
        ranks: 0,
        effect: (rank, level) => `Rocket Damage ${flat(rank, level, 21)}`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Violent Violence": {
        text: "After killing an enemy, Zane gains increased Fire Rate for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Fire Rate +${percent(rank, 4)}%, Cooldown 8 sec`,
      },
      "Playing Dirty": {
        text: "After killing an enemy, Zane's next five shots all have a chance to fire an additional projectile.",
        ranks: 5,
        effect: (rank, level) => `Extra Shot Chance ${percent(rank, 10)}%`,
      },
      "Almighty Ordnance": {
        text: "Hold down LB or RB (controller) while SNTNL is deployed to paint a target area. SNTNL fires a missile barrage at that area, and if an enemy is killed, Almighty Ordnance's duration is reset. This can only be used once per Action Skill use.",
        ranks: 0,
        effect: (rank, level) => `Missile Damage ${flat(rank, level, 32)}, 4 Missiles per Barrage`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Good Misfortune": {
        text: "Killing an enemy increases Zane's Action Skill Duration. This skill has diminishing returns.",
        ranks: 3,
        effect: (rank, level) => `Kill skill, initial action skill bonus duration +${percent(rank, 4)}%`,
      },
    },
    "6": {
      "Seein' Red": {
        text: "Activating an Action Skill automatically activates all of Zane's kill skills.",
        ranks: 1,
      }
    }
  },
  "Doubled Agent": {
    "0": {
      "Digi-Clone": {
        text: "Spawn a Digi-Clone of Zane. The clone stays in place, but distracts and fires at enemies. Pressing LB or RB (controller) while the Clone is active causes Zane and the Clone to swap places.",
        effect: (rank, level) => `Duration - 15 seconds, Cooldown - 28 sec`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Synchronicity": {
        text: "Whenever one or more of Zane's action skills are active, he gains increased Gun Damage for each active action skill.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage +${percent(rank, 4)}% per active action skill`,
      },
      "Praemunitus": {
        text: "Zane and his Dig-Clone gain increased Magazine Size.",
        ranks: 3,
        effect: (rank, level) => `Magazine Size +${percent(rank, 8.33)}%`,
      },
      "Borrowed Time": {
        text: "Zane gains increased Action Skill Duration for every active action skill.",
        ranks: 5,
        effect: (rank, level) => `Action Skill Duration +${percent(rank, 3)}% per active action skill`,
      },
    },
    "2": {
      "Binary System": {
        text: "Whenever Zane swaps places with his Clone, a Cryo Nova is triggered around Zane and his Clone.",
        ranks: 0,
        effect: (rank, level) => `Nova Damage ${flat(rank, level, 46)}`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Donnybrook": {
        text: "Whenever Zane kills an enemy ,he and his Digi-Clone receive increased Gun Damage and gain Health Regeneration for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage +${percent(rank, 3)}%, Health Regen ${percent(rank, 0.5)}% of missing health, Duration 8 sec`,
      },
      "Fractal Frags": {
        text: "The Digi-Clone throws a copy of Zane's current grenade mod when it is first activated. If the Digi-Clone is killed, it drops a free grenade. Killing an enemy while the Digi-Clone is active gives the Clone a chance to throw a grenade.",
        ranks: 1,
        effect: (rank, level) => `Grenade Chance 30%`,
      },
      "Duct Tape Mod": {
        text: "The first shot fired from Zane's gun has a chance to also fire a grenade. The more grenades in his capacity, the higher the chance.",
        ranks: 5,
        effect: (rank, level) => `Grenade Chance up to ${percent(rank, 4)}%, Cooldown 8 sec`,
      },
    },
    "3": {
      "Schadenfreude": {
        text: "Whenever the Clone takes damage, Zane's shield is restored by a portion of that damage.",
        ranks: 0,
        effect: (rank, level) => `Shields Restored +100% of damage`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Quick Breather": {
        text: "Whenever Zane swaps places with his Clone, his shield immediately begins recharging.",
        ranks: 1,
      },
      "Which One's Real?": {
        text: "Enemies are more likely to target the Clone for a few seconds after it's summoned and after swapping places.",
        ranks: 0,
        effect: (rank, level) => `Duration 4 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Dopplebanger": {
        text: "Hold down LB or RB (controller) to end the action skill early. When Zane's Action Skill is ended, the Clone explodes, dealing Fire Damage to all nearby enemies. The more Action Skill time remaining, the greater the damage.",
        ranks: 0,
        effect: (rank, level) => `Damage Up to ${flat(rank, level, 280)}`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Pocket Full of Grenades": {
        text: "After killing an enemy, Zane gains Grenade Regeneration for a few seconds.",
        ranks: 3,
        effect: (rank, level) => `Grenade Regeneration ${flatCeil(rank, level, 6.5)}%, Duration 8 sec`,
      },
      "Old-U": {
        text: "Press LB or RB (controller) during Fight for Your Life if Digi-Clone is active to destroy the clone and immediately gain a Second Wind with full health.",
        ranks: 1,
      },
      "Supersonic Man": {
        text: "Whenever one or more of Zane's Action Skills are active, he gains increased Movement Speed for each active Action Skill.",
        ranks: 3,
        effect: (rank, level) => `Movement Speed +${percent(rank, 4)}% per active action skill`,
      },
      "Digital Distribution": {
        text: "If Zane takes health damage while the Clone is active, a portion of that damage is shared to his Clone instead.",
        ranks: 0,
        effect: (rank, level) => `Shared Health Damage +75%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Like a Ghost": {
        text: "Zane and his Digi-Clone gain a chance to ignore bullets. This chance is increased for a few seconds after activating an action skill. This effect stacks.",
        ranks: 3,
        effect: (rank, level) => `Ignore Bullet Chance ${percent(rank, 2)}%, Additional Ignore Bullet Chance +${percent(rank, 3)}%, Duration 8 sec`,
      },
      "Boom. Enhance.": {
        text: "Whenever Zane summons his Digi-Clone, it consumes up to 3 grenades. For every grenade consumed, the Digi-Clone gains increased Gun Damage, Max Health, Fire Rate, Reload Speed, and Digi-Clone Duration.",
        ranks: 1,
        effect: (rank, level) => `Gun Damage +20% per grenade, Max Health +81% per grenade, Fire Rate +5% per grenade, Reload Speed +31% per grenade, Digi-clone Duration +25% per grenade`,
      },
      "Trick of the Light": {
        text: "Zane deals Bonus Shock Damage to enemies that aren't targeting him.",
        ranks: 3,
        effect: (rank, level) => `Bonus Damage ${percent(rank, 6)}% of damage dealt`,
      },
    },
    "6": {
      "Double Barrel": {
        text: "The Clone is equipped with a copy of Zane's Current Weapon when activated. Swapping places with the Clone causes Zane and his clone to gain increased Gun Damage.",
        ranks: 1,
        effect: (rank, level) => `Gun Damage +20%, Item Duping +100%`,
      },
    },
  },
};

export default skills;
