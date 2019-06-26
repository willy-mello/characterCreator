import React from 'react'
import {roll} from '../rollFunctions'

export class DiceRoll extends React.Component{
    constructor(){
        super()
        this.state={
            str:0,
            dex:0,
            con:0,
            int:0,
            wdm:0,
            cma:0,
            rolled:false
        }
    }
    statRoll=()=>{
        this.setState({
            stats:{

                str:roll(3,6),
                dex:roll(3,6),
                con:roll(3,6),
                int:roll(3,6),
                wdm:roll(3,6),
                cma:roll(3,6)
            },
            rolled:true

        })
    }
    render(){
     return   this.state.rolled?
        <div>ß
            <p>Strength: {this.state.stats.str}</p>
            <p>Dexterity: {this.state.stats.dex}</p>
            <p>Constitution: {this.state.stats.con}</p>
            <p>Intelligence: {this.state.stats.int}</p>
            <p>Wisdom: {this.state.stats.wdm}</p>
            <p>Charisma: {this.state.stats.cma}</p>
         </div>
        :
        <div>

            
                <button type='' onClick={this.statRoll}>rollStats</button>
               
            <button type='submit'>accept these stats</button> 
        
            
        </div>
        

    }
}