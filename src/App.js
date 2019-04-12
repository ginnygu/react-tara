import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: ''
    }
    this.ToPages = this.ToPages.bind(this);
  }

  ToHome = () => {
    this.setState({ currentView: 'Home' });
  }
  
  ToPages = (page)=> {
    this.setState({ currentView : page });
  }

  

  WhichToRender() {
    const links = [
      "Home",
      "Menu",
      "Location",
      "Reservation"
    ]
    const { currentView } = this.state;
    switch (currentView) {
      default:
        return (
          < Intro
            currentView={this.state.currentView}
            ToHome={this.ToHome} 
            />
        )
      case 'Home':
        return (
          <div>
          < NavBar 
          currentView={this.state.currentView}
          links = {links}
          ToPages = {this.ToPages}
          />
          < Home/>
          </div>
        )
      case 'Menu':
        return (
          <div>
          < NavBar 
          currentView={this.state.currentView}
          links = {links}
          ToPages = {this.ToPages}
          />
          < Menu />
          </div>
        )
    }
  }
  render() {
    return (
      <div className="App">
        {this.WhichToRender()}
      </div>
    );
  }
}

export default App;
