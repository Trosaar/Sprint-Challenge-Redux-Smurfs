/*
  Be sure to import in all of the action types from `../actions`
*/
import { CALL_SMURFS, CALL_SUCCESS, CALL_FAIL, MOVING_IN, MOVE_SUCCESS, MOVE_FAIL } from '../actions'

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 }

export default (state = initialState, action) => {
  switch (action.type) {
    case CALL_SMURFS: {
      return {
        ...state,
        fetchingSmurfs: true
      }
    }
    case CALL_SUCCESS: {
      const smurfsAtHome = action.payload;
      return {
        ...state,
        smurfs: smurfsAtHome,
        fetchingSmurfs: false,
        error: false,
      }
    }
    case CALL_FAIL: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: true,
      }
    }
    case MOVING_IN: {
      return {
        ...state,
        addingSmurf: true,
      }
    }
    case MOVE_SUCCESS: {
      const paperworkSigned = action.payload;
      return {
        ...state,
        smurfs: paperworkSigned,
        addingSmurf: false,
        error: false,
      }
    }
    case MOVE_FAIL: {
      return {
        ...state,
        addingSmurf: false,
        error: true,
      }
    }
    default: {
      return state
    }
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
