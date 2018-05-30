import React from 'react';
import '../css/weather-form.css';
import PropTypes from 'prop-types';

class WeatherForm extends React.Component {
  getWeather(event) {
    event.preventDefault();
    const weatherId = this.weatherFormInput.value;
    if(weatherId === "" ) {
      alert("Please enter: city, state");
    }
    else {
      /**
       * 'sample_city' in the code below is simply getting
       * the current 'city' data object.
       *
       * If we were not using sample weather data, and were
       * instead pulling weather data from an API, we would
       * use the user's form input (weatherId) to reach out
       * to the API and find weather data matching the
       * city/state from their form input.
       *
       * We would then pass the data returned from the API
       * as the argument to this.props.getFiveDayForecast,
       * like this: this.props.getFiveDayForecast(apiResponse).
       */
      const sample_city = this.props.city;
      this.props.getFiveDayForecast(sample_city);

      let path = `/weather/${weatherId}`;
      this.props.history.push(path);
    }
  }
  render() {
    return (
      <form action="" className="weather-form" onSubmit={ (e) => this.getWeather(e) }>
        <h1 className="form-title">Find your local weather!</h1>
        <div>
          <label htmlFor="city">Enter city, state:</label>
          <input type="text" id="city" name="city" placeholder="ex: Miami, FL" ref={ (input) => this.weatherFormInput = input } />
        </div>
        <footer>
          <input type="submit" value="Find my weather!" />
        </footer>
      </form>
    )
  }
}

WeatherForm.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default WeatherForm;
