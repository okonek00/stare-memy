import React, { useState } from "react";

import Footer from "./components/Footer/footer";
import NavBar from "./components/NavBar/NabBar";

import DUMMY_MEMES from "./components/Memes/DUMMY_MEMES";

import "./App.css";

const App = () => {
  const [memes, setMemes] = useState(DUMMY_MEMES);

  const addMemeHandler = (meme) => {
    setMemes((prevMeme) => {
      return [meme, ...prevMeme];
    });
  };

  const updateMemeVotes = (memeId, voteType) => {
    const updatedMemes = memes.map((meme) => {
      if (meme.id === memeId) {
        if (voteType === "upvote") {
          meme.upvotes = meme.upvotes + 1;
        } else {
          meme.downvotes = meme.downvotes + 1;
        }
      }
      return meme;
    });

    setMemes(updatedMemes);
  };

  return (
    <div className="App">
      <NavBar
        items={memes}
        updateMemeVotes={updateMemeVotes}
        onAddMeme={addMemeHandler}
      />
      <Footer />
    </div>
  );
};

export default App;
