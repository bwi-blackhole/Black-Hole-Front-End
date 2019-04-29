import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios.post("http://localhost:3333/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:3333/api/notes", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_AILURE";

export const deleteNotes = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:3333/api/notes/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};

export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAIL = "ADD_NOTE_FAIL";

export const addNote = note => dispatch => {
  dispatch({type: ADD_NOTE_START});

  axios.post(`http://localhost:333/api/notes`)
    .then(res => dispatch({type: ADD_NOTE_SUCCESS, payload: res}))
    .catch(err => dispatch({type: ADD_NOTE_FAIL, payload: err}));
};

export const UPDATE_NOTE_START = "UPDATE_NOTE_START";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAIL = "UPDATE_NOTE_FAIL";

export const updateNote = update => dispatch => {

};