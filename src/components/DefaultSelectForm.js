import React from "react";

export const SelectForm = props => {
  return (
    <form>
      {props.choices.map((elem, idx) => {
        return <select value={elem.value}> {elem.value} </select>;
      })}
      <button type="submit">assign</button>
    </form>
  );
};
