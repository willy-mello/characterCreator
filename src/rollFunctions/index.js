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

export { roll, abilityMod } 