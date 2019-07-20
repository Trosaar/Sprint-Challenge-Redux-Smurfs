import axios from 'axios';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const CALL_SMURFS = 'CALL_SMURFS';
export const CALL_SUCCESS = 'CALL_SUCCESS';
export const CALL_FAIL = 'CALL_FAIL';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function smurfMeeting() {
  return (dispatch) => {
    dispatch({type: CALL_SMURFS})
    axios.get('localhost:3333/smurfs')
      .then((res) => {
        dispatch({type: CALL_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        dispatch({type: CALL_FAIL, payload: err})
      })
  }
}
