// Action Constants
export const FETCH_SUGGESTION = 'FETCH_SUGGESTION';
export const SUGGESTION_REQUEST = 'SUGGESTION_REQUEST';
export const SUGGESTION_RESPONSE = 'SUGGESTION_RESPONSE';
export const SET_SUGGESTION = 'SET_SUGGESTION';

// Action Creators

function suggestionRequest() {
  return {
    type: SUGGESTION_REQUEST
  }
}

function suggestionResponse(data, status) {
  return {
    type: SUGGESTION_RESPONSE,
    status: status < 400 ? 'success' : 'fail',
    data
  }
}


export function fetchSuggestion(data = {}) {
  const { lat = null, lon = null } = data;
  let queryParams = '';
  if (lat && lon) {
    queryParams = `?latitude=${lat}&longitude=${lon}`;
  } else {
    queryParams = '?location=10001';
  }
  return dispatch => {

    dispatch(suggestionRequest());
    let status = null;

    const url = `http://localhost:8000/businesses/search${queryParams}`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
      dispatch(suggestionResponse(json, status));
    })
  }
}

export function setSuggestion() {
  return {
    type: SET_SUGGESTION,
  }
}

function shouldFetchSuggestions(state) {
  const suggestions = state.foodStore.suggestions;
  const suggestionIsFetching = state.foodStore.suggestionsIsFetchinga;
  const { lat = null, lon = null } = state.defaultStore;
  if (suggestions && suggestions.length < 1) {
    return true;
  } else if (suggestionIsFetching) {
    return false;
  } else if (lat && lon) {
    return true;
  } else {
    return false;
  }
}

export function fetchSuggestionsIfNeeded() {
  return (dispatch, getState) => {
    const { lat = null, lon = null } = getState().defaultStore;
    if (shouldFetchSuggestions(getState())) {
      return dispatch(fetchSuggestion({lat, lon}))
    }
  }
}
