import React from "react";

import "./MemeFilter.css";

const MemeFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="meme-filter">
      <div className="meme-filter__control">
        <label>Filtruj po dacie dodania</label>
        <select onChange={dropdownChangeHandler}>
          <option value="all">Wszystko</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default MemeFilter;
