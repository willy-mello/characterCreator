import { roll, abilityMod, addProficiencyIfItExists } from '../rollFunctions'
// import { race } from 'q';

class Character {
  constructor(skillObj, raceObj) {
    this.strength = skillObj.str + raceObj.bonus.str
    this.dexterity = skillObj.dex + raceObj.bonus.dex
    this.constitution = skillObj.con + raceObj.bonus.con
    this.intelligence = skillObj.int + raceObj.bonus.int
    this.wisdom = skillObj.wdm + raceObj.bonus.wdm
    this.charisma = skillObj.cma + raceObj.bonus.cma
    this.level = 1
    this.experience = 0
    this.size = raceObj.size
    this.age = raceObj.age
    this.race = raceObj.race
    this.ac = 0
    this.alignment = ''
    this.advantage = []
    this.resistance = []
    this.proficiency = {
      skill: addProficiencyIfItExists(raceObj.proficiency.skill),
      weapon: addProficiencyIfItExists(raceObj.proficiency.weapon),
      armor: addProficiencyIfItExists(raceObj.proficiency.armor),
      tool: addProficiencyIfItExists(raceObj.proficiency.tool)
    }
  }
}

// class HillDwarf extends Character {
//   constructor(classObj) {
//     super()


//   }
// }
export {Character, roll, abilityMod}
