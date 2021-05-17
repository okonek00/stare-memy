import React from 'react';

import MemeDate from './MemeDate';
import Card from '../UI/Card'
import './MemeItem.css';
import LikeDislike2 from '../Buttons/LikeDislike2';
import Image from './Image';


const MemeItem = (props) => {
    console.log(props.upvotes)
  return (
    <Card className="meme">
      <MemeDate date={props.date}/>
      <div className="meme__description">
        <h2>{props.title}</h2>
        <Image amount={props.amount} />
      </div>
    <LikeDislike2 
    date={props.date}
    key={props.id}
    upvotes={props.upvotes}
    downvotes={props.downvotes}
    />
    </Card>
  );
}

export default MemeItem;
