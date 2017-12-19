import { SET_LOCATION } from '../actions/location';

const initialState = {
  date: Date.now(),
  lat: null,
  lon: null,
}

const defaultReducer = (state = initialState, action ) => {
  switch (action.type) {
    case SET_LOCATION:
      const { lat, lon } = action
      return Object.assign({}, state, {
        lat,
        lon
      })
    default:
      return state;
  }
}

export default defaultReducer;
