const currentDay = (state = {}, action) => {
 switch(action.type) {
   case 'GET_SELECTED_DAY':
     return action.day
   default:
     return state;
 }
}


export default currentDay;
