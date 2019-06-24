import { roll, abilityMod } from '../rollFunctions'
// import { race } from 'q';

class Character {
  constructor(str, dex, con, int, wdm, cma, raceObj) {
    this.strength = str + raceObj.bonus.str
    this.dexterity = dex + raceObj.bonus.dex
    this.constitution = con + raceObj.bonus.con
    this.intelligence = int + raceObj.bonus.int
    this.wisdom = wdm + raceObj.bonus.wdm
    this.charisma = cma + raceObj.bonus.cma
    this.level = 1
    this.experience = 0
    this.size = raceObj.size
    this.age = raceObj.age
    this.race = raceObj.race
    this.AC = 0
    this.alignment = ''
    this.advantage = []
    this.resistance = []
    this.proficiency = {
      skill: [],
      weapon: [],
      armor: [],
      tool: []
    }
  }
}

class HillDwarf extends Character {
  constructor(classObj) {
    super()


  }
}

