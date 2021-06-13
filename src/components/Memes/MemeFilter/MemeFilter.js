import React from "react";

import "./MemeFilter.css";

const MemeFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const uniqueDates = Array.from(new Set(props.date2));

  return (
    <div className="meme-filter">
      <div className="meme-filter__control">
        <label>Filtruj po dacie dodania</label>
        <select onChange={dropdownChangeHandler}>
          <option value="all">Wszystko</option>
          {uniqueDates.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MemeFilter;
