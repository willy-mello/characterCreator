import React, { Component } from "react";
import { Races } from "../sampleData";
import { RaceForm } from "./RaceForm";
import { roll, Character, abilityMod } from "../character";
import { DiceRoll } from "./DiceRoll";

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      currentCharacter: {},
      selectedRace: "",
      skillPoints: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = evt => {
    console.log(evt.target.value);
    evt.preventDefault();

    this.setState({
      currentCharacter: Races[this.state.selectedRace]
    });
    console.log("submitted race", evt.target.value);
  };
  handleChange = evt => {
    evt.preventDefault();
    console.log(evt.target.value);

    this.setState({
      selectedRace: evt.target.value
    });
    console.log("selected race", evt.target.value);
  };
  componentDidUpdate() {
    console.log("updated state", this.state);
  }
  render() {
    return (
      <div>
        <p> Testing Render </p>
        <RaceForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <DiceRoll />
      </div>
    );
  }
}
