import React, { Component } from 'react';
import { Provider } from 'react-redux';


import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import store from './store'


import './App.css';


const API_KEY = '57f2826191d13aed90ab2d2abd4d2a06';
const API_TOKEN = 'd6cf9d4e250f2fb9e0889fe261dd26b158b7c7e4';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    temperatureMax: undefined,
    temperatureMin: undefined,
    weather: undefined,
    date: undefined,
    pollution: undefined,
    error: undefined,

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`)
    const data = await api_call.json();

    const api_token_call = await fetch(`https://api.waqi.info/feed/${city}/?token=${API_TOKEN}`)
    const dataPollution = await api_token_call.json();
    console.log(dataPollution)

    if (city && country) {
      console.log(data)
      this.setState({
      city: data.city.name,
      country: data.city.country,
      temperature: (Number(data.list[0].main.temp) - 273).toFixed(2),
      temperatureMax: (Number(data.list[0].main.temp_max) - 273).toFixed(2),
      temperatureMin: (Number(data.list[0].main.temp_min) - 273).toFixed(2),
      weather: data.list[0].weather[0].description,
      pollution: dataPollution.data.iaqi.pm25.v,
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
      <Provider store={store}>
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
                    pollution={this.state.pollution}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      </Provider>
    );
  }
}
export default App;
