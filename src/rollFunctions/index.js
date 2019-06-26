const roll = (num, size) => {
  let total = []
  for (let i = 0; i < num; i++) {
    let die = Math.floor(Math.random() * size) + 1
    total.push(die)
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return total.reduce(reducer)

}

const abilityMod = (abilityScore) => {
  return Math.floor((abilityScore - 10) / 2)
}

const addProficiencyIfItExists=(arr)=>{
  return arr?arr:[]
}

const statsRoll=()=>{
  let fourRolls=[roll(1,6),roll(1,6),roll(1,6),roll(1,6)]
  let lowestIdx=0
  let lowestVal=Infinity
  for(let i =0;i<fourRolls.length;i++){
    if(fourRolls[i]<lowestVal){
      lowestVal=fourRolls[i]
      lowestIdx=i
    }
  }
  fourRolls.splice(lowestIdx,1)
  console.log('four rolls',fourRolls)
  return fourRolls
}

const getRandomStats=()=>{
  let sixStats=[0,0,0,0,0,0]
  
  return  sixStats.map((elem)=>elem=statsRoll())
}

export { roll, abilityMod, addProficiencyIfItExists, statsRoll, getRandomStats } 
