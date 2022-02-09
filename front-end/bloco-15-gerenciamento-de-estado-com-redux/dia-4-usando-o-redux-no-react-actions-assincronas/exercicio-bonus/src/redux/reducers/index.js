import { LOADING_REQUEST, GET_SUBREDDIT, FAILED_REQUEST } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  title: [],
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_REQUEST:
      return { ...state, loading: true };
    case GET_SUBREDDIT:
      return { ...state, title: [...action.payload.data.children], loading: false, error: '' };
    case FAILED_REQUEST:
      return { ...state, error: 'Não foi encontrado!', loading: false };
    default:
      return state;
  };
};

export default reducer;
