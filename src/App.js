import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Memes from "./components/Memes/Memes";
import NewMeme from "./components/NewMeme/NewMeme";
import ErrorPage from "./components/ErrorPage";
import Regular from "./components/Memes/Regular";
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
            <Memes items={memes} />
          </Route>
          <Route exact path="/regular">
            <Regular items={memes} />
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
