import React, { useState } from "react";

import MemeItem from "./MemeItem";
import Card from "../UI/Card";
import "./Memes.css";
import MemeFilter from "./MemeFilter";

const Memes = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredMemes = props.items.filter((meme) => {
    return meme.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="memes">
        <MemeFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredMemes.map((meme) => (
          <MemeItem
            key={meme.id}
            title={meme.title}
            img={meme.img}
            date={meme.date}
            upvotes={meme.upvotes}
            downvotes={meme.downvotes}
          />
        ))}
      </Card>
      ;
    </div>
  );
};

export default Memes;
