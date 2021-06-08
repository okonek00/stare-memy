import React from "react";

import MemeDate from "../MemeDate/MemeDate";
import Card from "../../UI/Card";
import "./MemeItem.css";
import LikeDislike2 from "../../Buttons/LikeDislike2";
import Image from "../Image/Image";

const MemeItem = (props) => {
  return (
    <Card className="meme">
      <MemeDate date={props.date} />
      <div className="meme__description">
        <h2>{props.title}</h2>
        <Image img={props.img} />
      </div>
      <LikeDislike2
        date={props.date}
        key={props.id}
        id={props.id}
        upvotes={props.upvotes}
        downvotes={props.downvotes}
        updateMemeVotes={props.updateMemeVotes}
      />
    </Card>
  );
};

export default MemeItem;
