import React from 'react';
import Day from './Day';
import PropTypes from 'prop-types';

const Days = (props) => {
  const cityData = props.data.city;
  return (
    <div>
      <h1>Weather for { props.cityState }</h1>
      <div className="days">
        {
          cityData.map( (day, i) => {
            return (
              <Day
                day={ day }
                data={ props.data }
                key={ i }
              />
            )
          })
        }
      </div>
    </div>
  )
}

Days.propTypes = {
  cityState: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Days;
