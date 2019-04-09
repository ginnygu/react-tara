import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: ''
    }
  }

  ToHome = () => {
      this.setState({ currentView: 'Home' });
  }

  WhichToRender() {
    const { currentView } = this.state;
    switch (currentView) {
      default:
        return (
          < Intro 
          currentView = {this.state.currentView}
          ToHome = {this.ToHome}/>
        )
      case 'Home':
        return (
          < Home/>
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
