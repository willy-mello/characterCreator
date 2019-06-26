import React from "react";

export const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={props.handleChange}>
        <option value="hilldwarf">Hill Dwarf</option>
        <option value="mountaindwarf">Mountain Dwarf</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <button type="submit">Choose this race</button>
    </form>
  );
};
