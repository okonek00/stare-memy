import React from "react";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";

import Logo from "../Logo/Logo";
import Memes from "../Memes/Memes/Memes";
import NewMeme from "../NewMeme/NewMeme";
import ErrorPage from "../ErrorPage/ErrorPage";

import "./NavBar.css";

const NavBar = (props) => {
  return (
    <BrowserRouter>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="MenuBar">
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
      </div>

      <Switch>
        <Route exact path="/stare-memy">
            <Redirect to="/"/>
        </Route>
        <Route exact path="/">
          <Memes
            stuff={props.items}
            isHot={true}
            updateMemeVotes={props.updateMemeVotes}
            render={<div className="naTopieMemes" />}
          />
        </Route>
        <Route exact path="/natopie">
          <Memes
            stuff={props.items}
            isHot={true}
            updateMemeVotes={props.updateMemeVotes}
            render={<div className="naTopieMemes" />}
          />
        </Route>
        <Route exact path="/regular">
          <Memes
            stuff={props.items}
            isHot={false}
            updateMemeVotes={props.updateMemeVotes}
            render={<div className="bezSzaluMemes" />}
          />
        </Route>
        <Route exact path="/new">
          <NewMeme onAddMeme={props.onAddMeme} />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default NavBar;
