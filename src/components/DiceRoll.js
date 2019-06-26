import React from 'react'
import {
    roll,
    getRandomStats
} from '../rollFunctions'

export class DiceRoll extends React.Component {
    constructor() {
        super()
        this.state = {
            stats: {

                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wdm: 0,
                cma: 0
            },
            statChoices: [],
            rolled: false
        }
    }
    statRoll = () => {
        this.setState({
            statChoices: getRandomStats(),
            rolled: !this.state.rolled

        })
    }
    setStat = (evt) => {
        evt.preventDefault()


    }
    render() {
        return this.state.rolled ?
        <div>
            <p> Strength : {this.state.stats.str } </p> 
            <p> Dexterity: {this.state.stats.dex} </p> 
            <p> Constitution: {this.state.stats.con} </p>
             <p> Intelligence: {this.state.stats.int} </p>
              <p> Wisdom: {this.state.stats.wdm} </p>
               <p> Charisma: {this.state.stats.cma} </p> 
            <button type = '' onClick = {this.statRoll}> rollStats </button> 
    </div>
            :
            <div >
            <form onSubmit = {} >
            <select onChange = {} >
            <option value = "hilldwarf" > Hill Dwarf </option> 
            <option value = "mountaindwarf" > Mountain Dwarf </option>
             <option value = "mercedes" > Mercedes </option>
              <option value = "audi" > Audi </option> 
              </select>
             <button type = 'submit' > Choose this race </button> 

            </form>

            <button type = '' onClick = {this.statRoll} > rollStats </button>

            <button type = 'submit' > accept these stats </button> 


            </div>


    }
}