import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';
import Location from './components/Location';
import Reservation from './components/Reservation';
import image from './image';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      mapView: '',
      images: image
    }
    this.ToPages = this.ToPages.bind(this);
  }

 componentWillMount(){
    this.setState({ 
      mapView: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.620598045897!2d-73.73747073657762!3d40.76930437776988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c289faa6119843%3A0x619264db00fa3fa2!2sTara+Japanese+Cuisine!5e0!3m2!1sen!2sus!4v1550077608799"
    });
  }

  ToHome = () => {
    this.setState({ currentView: 'Home' });
  }
  
  ToPages = (page)=> {
    document.getElementById(`${page}`).scrollIntoView({ behavior: "smooth" });
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
          <section>
            < Intro
            currentView={this.state.currentView}
            ToHome={this.ToHome} 
            />
            </section>
        )
      case 'Home':
        return (
          <div>
            
            < Header 
              currentView={this.state.currentView}
              links = {links}
              ToPages = {this.ToPages}
            />
            <div id="Home">
            < Home 
              images ={this.state.images}
              />
            </div>
            <div id="Menu">
            < Menu />
            </div>
            <div id= "Location">
            < Location 
              mapView = {this.state.mapView}
            />
            </div>
            <div id="Reservation">
              < Reservation/>
            </div>
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
