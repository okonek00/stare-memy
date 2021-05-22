import React, { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

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
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className="NavBar">
          <li>
            <NavLink className="Link" activeClassName="selected" to="/natopie">
              NA TOPIE
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" activeClassName="selected" to="/regular">
              BEZ SZAŁU
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" activeClassName="selected" to="/new">
              DODAJ STAREGO MEMA
            </NavLink>
          </li>
        </ul>

        <Switch>
        <Route exact path="/">
            <Memes items={memes} updateMemeVotes={updateMemeVotes} />
          </Route>
          <Route exact path="/natopie">
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
