import { SET_CHART_DATA, FETCH_CHART_DATA_FAILED } from '../types/types'

const initialState = {
  data: [], 
  error: false
}

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_CHART_DATA:
      return {
        ...state,
        data: action.payload
    };
    case FETCH_CHART_DATA_FAILED:
      return {
        ...state,
        error: true,
        data: []
    };
    default:
      return state  
  }
}

export default reducer