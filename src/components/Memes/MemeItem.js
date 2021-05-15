import React from 'react';

import MemeDate from './MemeDate';
import Card from '../UI/Card'
import './MemeItem.css';
import UpvoteBtn from '../Buttons/UpvoteBtn';

const MemeItem = (props) => {
  return (
    <Card className="meme">
      <MemeDate date={props.date}/>
      <div className="meme__description">
        <h2>{props.title}</h2>
        <div className="meme__img">{props.amount}</div>
      </div>
    <div className="meme__img">{props.count}</div>
    <UpvoteBtn count={props.count}/>
    <div className="meme__img">{props.downvotes}</div>
    </Card>
  );
}

export default MemeItem;
