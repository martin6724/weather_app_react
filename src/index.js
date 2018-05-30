import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './css/global.css';
import WeatherFormContainer from './components/WeatherFormContainer';
import WeatherAppContainer from './components/WeatherAppContainer';
import { Provider } from 'react-redux';
import store, { history } from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
          <div>
            <Route exact path="/" component={ WeatherFormContainer } />
            <Route path="/weather/:weatherId" component={ WeatherAppContainer } />
          </div>
      </Router>
    </Provider>
  )
}

render( <Root />, document.querySelector('#app') );
