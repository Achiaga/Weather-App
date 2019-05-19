import React, { Component } from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import './App.css';

const API_KEY = '57f2826191d13aed90ab2d2abd4d2a06';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`)
    const data = await api_call.json();
    console.log(data)

  }


  render() {
    return (
      <div>
        <Titles />
        <Form submitted={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
