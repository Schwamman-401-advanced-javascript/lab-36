export const initialState = { 
  showDetails: false,
  details: {}
};

export function reducer(state = initialState, action = {}) {
  console.log(action.payload);
  switch(action.type) {
    case 'toggleDetails':
      return {
        details: action.payload || {},
        showDetails: !!action.payload,
      }
    default:
      return state;
  } 
}

export function toggleDetails(item) {
  return {
    type: 'toggleDetails',
    payload: item,
  }
}