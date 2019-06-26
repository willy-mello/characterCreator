const abilityScoreTable = {
  1: -5,
  2: -4,
  3: -4,
  4: -3,
  5: -3,
  6: -2,
  7: -2,
  8: -1,
  9: -1,
  10: 0,
  11: 0,
  12: 1,
  13: 1,
  14: 2,
  15: 2,
  16: 3,
  17: 3,
  18: 4,
  19: 4,
  20: 5,
  21: 5,
  22: 6,
  23: 6,
  24: 7,
  25: 7,
  26: 8,
  27: 8,
  28: 9,
  29: 9,
  30: 10
}



const abilityRaceMods = {
  strength: {
    mountainDwarf: 2,
    dragonBorn: 2,
    halfOrc: 2,
    human: 1
  },
  dexterity: {
    elf: 2,
    halfling: 2,
    forestGnome: 1,
    human: 1
  },
  constitution: {
    dwarf: 2,
    halfling: 1,
    halfOrc: 1,
    rockGnome: 1,
    human: 1
  },
  intelligence: {
    highElf: 1,
    tiefling: 1,
    gnome: 2,
    human: 1
  },
  wisdom: {
    hillDwarf: 2,
    woodElf: 2,
    human: 1
  },
  charisma: {
    halfElf: 2,
    dragonBorn: 1,
    //drow = darkElf
    darkElf: 1,
    lightfootHalfling: 1,
    human: 1,
    tiefling: 2
  }

}
const Races = {
  hilldwarf: {
    ageRange: [50, 350],
    age: 100,
    alignmentSuggestion: 'lean toward lawful good',
    size: 'medium',
    speed: 25,
    race: 'hill dwarf',
    darkvision: true,
    advantage: ['poison'],
    resistance: ['poison'],
    proficiency: {
      tool: ['smith tools', 'brewer tools', 'mason tools'],
      weapon: ['battleaxe', 'handaxe', 'lighthammer', 'warhammer'],
      armor: []
    },
    bonus: {
      str: 0,
      dex: 0,
      con: 2,
      int: 0,
      wdm: 2,
      cma: 0

    }
  },
  mountaindwarf: {
    ageRange: [50, 350],
    age: 100,
    alignmentSuggestion: 'lean toward lawful good',
    size: 'medium',
    speed: 25,
    race: 'mountain dwarf',
    darkvision: true,
    advantage: ['poison'],
    resistance: ['poison'],
    proficiency: {
      tool: ['smith tools', 'brewer tools', 'mason tools'],
      weapon: ['battleaxe', 'handaxe', 'lighthammer', 'warhammer'],
      armor: ['light', 'medium']
    },
    bonus: {
      str: 2,
      dex: 0,
      con: 2,
      int: 0,
      wdm: 0,
      cma: 0

    }
  },
  //rewrite each raceobj to be a specific subrace with subrace bonuses
  elf: {
    ageRange: [75, 750],
    age: 150,
    alignmentSuggestion: 'lean toward chaotic good',
    size: 'medium',
    speed: 30,
    darkvision: true,
    advantage: [],
    resistance: [],
    proficiency: {
      skill: ['perception'],
      weapon: ['longsword', 'shortsword', 'shortbow', 'longbow'],
      armor: []
    },
    subrace: ['highElf', 'woodElf', 'darkElf']
  },
  halfling: {
    ageRange: [20, 150],
    alignmentSuggestion: 'lean toward lawful good',
    size: 'small',
    speed: 25,
    darkvision: false,
    advantage: ['frightened'],
    resistance: [],
    proficiency: {
      skill: ['lucky'],
      weapon: [],
      armor: []
    },
    subrace: ['lightfootHalfling', 'stoutHalfling']
  },
  human: {
    ageRange: [18, 65],
    alignmentSuggestion: 'run the spectrum, the best and the worst are among them',
    size: 'medium',
    speed: 30,
    darkvision: false,
    advantage: [],
    resistance: [],
    proficiency: {
      skill: [],
      weapon: []
    }
  },
  dragonBorn: {
    ageRange: [15, 75],
    alignmentSuggestion: 'trend towards the extremes, very good or very evil',
    size: 'medium',
    speed: 30,
    darkvision: false,
    advantage: ['frightened'],
    resistance: ['poison'],
    proficiency: {
      skill: ['lucky'],
      weapon: []
    },
    subrace: ['lightfootHalfling', 'stoutHalfling']
  },

}
export {Races}