export const SET_LOCATION = 'SET_LOCATION';

export function setLocation(position) {
  const { latitude, longitude } = position.coords;
  return {
    type: SET_LOCATION,
    lat: latitude,
    lon: longitude,
  }
}
