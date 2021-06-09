import React from "react";

import MemeForm from "./MemeForm";

import "./NewMeme.css";

const NewMeme = (props) => {
  const shortid = require('shortid');

  const saveMemeDataHandler = (enteredMemeData) => {
    const memeData = {
      ...enteredMemeData,
      id: shortid.generate(),
    };
    props.onAddMeme(memeData);
    
  };
  return (
    <div className="new-meme">
      <MemeForm onSaveMemeData={saveMemeDataHandler} />
    </div>
    
  );
};

export default NewMeme;
