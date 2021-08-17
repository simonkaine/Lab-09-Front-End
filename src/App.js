import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharactersList from './characterList';
import CharacterDetails from './characterDetails';
import Header from './header.js';
import CreateCharacter from './createCharacter.js';
import './frontEnd.css';

class App extends Component {

  render() { 
    return ( 
      <section className="mainApp">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/createCharacter" component={CreateCharacter}></Route>
          <Route path="/characters/:id" component={CharacterDetails} />
          <Route path="/" exact component={CharactersList}></Route>
        </Switch>
      </BrowserRouter>
    </section>
     );
  }
}
 
export default App;
