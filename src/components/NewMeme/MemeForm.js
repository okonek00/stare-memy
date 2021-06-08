import React, { useState } from "react";


import "./MemeForm.css";


const MemeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const uploadImage = () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "starememy");
      data.append("cloud_name", "starememy");
      fetch("https://api.cloudinary.com/v1_1/starememy/image/upload", {
        method: "POST",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUrl(data.url);
        })
        .catch((err) => console.log(err));
    };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const memeData = {
      title: enteredTitle,
      img: url,
      date: new Date(enteredDate),
      upvotes: 0,
      downvotes: 0,
    };

    props.onSaveMemeData(memeData);
    setEnteredTitle("");
    setUrl("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-meme__controls">
        <div className="new-meme__control">
          <label>Tytuł</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
            <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
      </div>
    </div>
        <div className="new-meme__control">
          <label>Data dodania</label>
          <input
            type="date"
            min="2000-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-meme_actions">
        <button type="submit" onClick={uploadImage}>Dodaj Meme</button>
      </div>
      <div>
      <img src={url} alt="" />
      </div>
    </form>
  );
};

export default MemeForm;
