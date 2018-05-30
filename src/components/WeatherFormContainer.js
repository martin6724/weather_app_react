import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import WeatherForm from './WeatherForm';

/**
 *  creates this.props.city,
 *  this.props.currentDay
 */
const mapStateToProps = (state) => {
  return {
    city: state.city,
    currentDay: state.currentDay
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const WeatherFormContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherForm);

export default WeatherFormContainer;
