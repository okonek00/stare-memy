import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Memes from './components/Memes/Memes';
import NewMeme from './components/NewMeme/NewMeme';
import Image from './components/Memes/Image.js';
import ErrorPage from './components/ErrorPage';
import Regular from './components/Memes/Regular';


const DUMMY_MEMES = [
  {
    id: "e1",
    title: "Polonez",
    amount: <Image/>,
    date: new Date(2020, 7, 14),
    upvotes: 6,
    downvotes: 0,
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    upvotes: 4,
    downvotes: 2,
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    upvotes: 10,
    downvotes: 6,
  },
];

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
      <nav className="NavBar">
        <Link to='/'>NA TOPIE</Link>
        <Link to='/regular'>BEZ SZAŁU</Link>
        <Link to='/new'>DODAJ STAREGO MEMA</Link>
      </nav>
      
      <Switch>
      
      <Route exact path='/'>
        <Memes items={memes} />
      </Route> 
      <Route exact path='/regular'>
        <Regular items={memes}/>
      </Route> 
      <Route exact path='/new'>
        <NewMeme onAddMeme={addMemeHandler} />
      </Route> 
      <Route component={ErrorPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
