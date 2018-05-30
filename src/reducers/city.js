const city = (state = {}, action) => {
 switch(action.type) {
   case 'GET_FIVE_DAY_FORECAST':
     return action.city
   default:
     return state;
 }
}

export default city;
