import React, { Component } from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import './App.css';

const API_KEY = '57f2826191d13aed90ab2d2abd4d2a06';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    temperatureMax: undefined,
    temperatureMin: undefined,
    weather: undefined,
    date: undefined,
    error: undefined,

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`)
    const data = await api_call.json();

    if (city && country) {
      console.log(data)
      this.setState({
      city: data.city.name,
      country: data.city.country,
      temperature: data.list[0].main.temp,
      temperatureMax: data.list[0].main.temp_max,
      temperatureMin: data.list[0].main.temp_min,
      weather: data.list[0].weather[0].description,
      date: data.list[0].dt_txt,
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        temperatureMax: undefined,
        temperatureMin: undefined,
        weather: undefined,
        date: undefined,
        error: 'Please enter the values'
      })
    }
  }


  render() {

    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Titles />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form 
                    submitted={this.getWeather} />
                  <Weather 
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    temperatureMax={this.state.temperatureMax}
                    temperatureMin={this.state.temperatureMin}
                    weather={this.state.weather}
                    date={this.state.date}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}
export default App;
