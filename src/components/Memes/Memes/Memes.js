import React, { useState } from "react";

import MemeItem from "../MemeItem/MemeItem";
import Card from "../../UI/Card";
import "./Memes.css";
import MemeFilter from "../MemeFilter/MemeFilter";

const Memes = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const isHot = props.isHot;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const naTopie = props.items.filter((meme) => {
    return (
      meme.date.getFullYear().toString() === filteredYear &&
      meme.upvotes - meme.downvotes > -1
    );
  });

  const bezSzalu = props.items.filter((meme) => {
    return (
      meme.date.getFullYear().toString() === filteredYear &&
      meme.upvotes - meme.downvotes <= -1
    );
  });

  if (isHot) {
    return (
      <div>
        <Card className="memes">
          <MemeFilter selected={naTopie} onChangeFilter={filterChangeHandler} />
          {naTopie.map((meme) => (
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
  }
    return (
    <div>
      <Card className="memes">
        <MemeFilter selected={bezSzalu} onChangeFilter={filterChangeHandler} />
        {bezSzalu.map((meme) => (
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
  )};
export default Memes;
