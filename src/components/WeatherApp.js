import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';
// import sampleCity from '../sample-city';
import PropTypes from 'prop-types';

const WeatherApp = (props) => {
  return (
    <main>
      <Days cityState={ props.match.params.weatherId }
        data={ props }
      />
      <DetailedForecast currentDay={ props.currentDay } />
    </main>
  )
}

WeatherApp.propTypes = {
  city: PropTypes.array.isRequired,
  currentDay: PropTypes.object.isRequired,
  getFiveDayForecast: PropTypes.func.isRequired,
  getSelectedDay: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default WeatherApp;
