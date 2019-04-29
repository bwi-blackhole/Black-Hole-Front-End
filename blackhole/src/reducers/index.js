import {
  USER_UNAUTHORIZED,
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  DELETE_START,
  DELETE_SUCCESS,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS
} from "../actions";

const initialState = {
  // notes:[],
  notes: [
    {
      creator_id: 1,
      title: "mock title",
      body: "mock post1",
      created_at: "timestamp value",
      delete_at: "day and time of automatic deletion"
    },
    {
      creator_id: 2,
      title: "mock title",
      body: "mock post2",
      created_at: "timestamp value",
      delete_at: "day and time of automatic deletion"
    },
    {
      creator_id: 3,
      title: "mock title",
      body: "mock post2",
      created_at: "timestamp value",
      delete_at: "day and time of automatic deletion"
    },
    {
      creator_id: 4,
      title: "mock title",
      body: "mock post2",
      created_at: "timestamp value",
      delete_at: "day and time of automatic deletion"
    },
    {
      creator_id: 5,
      title: "mock title",
      body: "mock post2",
      created_at: "timestamp value",
      delete_at: "day and time of automatic deletion"
    }
  ],
  loggingIn: false,
  // token: localStorage.getItem("token"),
  token: true,
  fetchingNotes: false,
  addingNotes: false,
  updatingNotes: false,
  deletingNotes: false,
  error: null,
  errorStatusCode: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingNotes: false,
        notes: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        deletingNotes: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingNotes: false,
        error: "",
        errorStatusCode: null,
        notes: action.payload
      };
    case USER_UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingNotes: false
      };

      
    case ADD_NOTE_START:
      return {
        ...state,
        addingNotes: true
      };

    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        addingNotes: false,
        error: "",
        errorStatusCode: null,
        notes: action.payload
      };
      

    case UPDATE_NOTE_START:
      return {
        ...state,
        updatingNotes: true
      };

    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        updatingNotes: false,
        error: "",
        errorStatusCode: null,
        notes: action.payload
      };
    
    default:
      return state;
  }
};
