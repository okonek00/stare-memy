import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Memes from "./components/Memes/Memes/Memes";
import NewMeme from "./components/NewMeme/NewMeme";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Regular from "./components/Memes/Regular/Regular";
import DUMMY_MEMES from "./components/Memes/DUMMY_MEMES";
import Logo from "./components/Logo";

import "./App.css";

const App = () => {
  const [memes, setMemes] = useState(DUMMY_MEMES);

  const addMemeHandler = (meme) => {
    setMemes((prevMeme) => {
      return [meme, ...prevMeme];
    });
  };

  const updateMemeVotes = (memeId, voteType) => {
    const updatedMemes = memes.map(meme => {
      if (meme.id === memeId) {
        if (voteType === 'upvote') {
          meme.upvotes = meme.upvotes + 1
        } else {
          meme.downvotes = meme.downvotes + 1
        }
      }
      return meme;
    });

    setMemes(updatedMemes);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <Logo />
        </Link>
        <ul className="NavBar">
          <li>
            <Link className="Link" to="/">
              NA TOPIE
            </Link>
          </li>
          <li>
            <Link className="Link" to="/regular">
              BEZ SZAŁU
            </Link>
          </li>
          <li>
            <Link className="Link" to="/new">
              DODAJ STAREGO MEMA
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Memes items={memes} updateMemeVotes={updateMemeVotes} />
          </Route>
          <Route exact path="/regular">
            <Regular items={memes} updateMemeVotes={updateMemeVotes} />
          </Route>
          <Route exact path="/new">
            <NewMeme onAddMeme={addMemeHandler} />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
