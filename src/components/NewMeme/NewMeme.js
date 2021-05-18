import React from "react";

import MemeForm from "./MemeForm";

import "./NewMeme.css";

const NewMeme = (props) => {
  const saveMemeDataHandler = (enteredMemeData) => {
    const memeData = {
      ...enteredMemeData,
      id: Math.random().toString(),
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
