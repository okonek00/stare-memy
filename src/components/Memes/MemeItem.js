import React from 'react';

import MemeDate from './MemeDate';
import Card from '../UI/Card'
import './MemeItem.css';
import LikeDislike from '../Buttons/LikeDislike';


const MemeItem = (props) => {
    console.log(props.upvotes)
  return (
    <Card className="meme">
      <MemeDate date={props.date}/>
      <div className="meme__description">
        <h2>{props.title}</h2>
        <div className="meme__img">{props.amount}</div>
      </div>
    <div className="meme__img">{props.count}</div>
    <LikeDislike 
    date={props.date}
    upvotes={props.upvotes}
    downvotes={props.downvotes}
    />
    <div className="meme__img">{props.downvotes}</div>
    </Card>
  );
}

export default MemeItem;
