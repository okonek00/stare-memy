import React, { useState } from "react";

import MemeItem from "../MemeItem/MemeItem";
import Card from "../../UI/Card";
import "./Memes.css";
import MemeFilter from "../MemeFilter/MemeFilter";

const Memes = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const isHot = props.isHot;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredMemesByDate = props.stuff.filter((meme) => {
    return (
      meme.date.getFullYear().toString() === filteredYear ||
      filteredYear === "all"
    );
  });

  const memeAddYear = props.stuff.map((year) => {
    return (
      year.date.getFullYear().toString()
    )
  })

  const filteredMemesByDateAndType = filteredMemesByDate.filter((meme) => {
    return (
      (isHot && meme.upvotes - meme.downvotes > -1) ||
      (!isHot && meme.upvotes - meme.downvotes <= -1)
    );
  });

  return (
    <div>
      <Card className="memes">
        <MemeFilter 
        onChangeFilter={filterChangeHandler}
        date2={memeAddYear}
        />

        {filteredMemesByDateAndType.map((meme) => (
          <MemeItem
            key={meme.id}
            id={meme.id}
            title={meme.title}
            img={meme.img}
            date={meme.date}
            upvotes={meme.upvotes}
            downvotes={meme.downvotes}
            updateMemeVotes={props.updateMemeVotes}
          />
        ))}
      </Card>
    </div>
  );
};

export default Memes;
