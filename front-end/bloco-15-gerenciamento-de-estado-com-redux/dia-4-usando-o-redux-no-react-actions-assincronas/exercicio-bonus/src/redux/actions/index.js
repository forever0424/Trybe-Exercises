import redditAPI from "../../services/redditAPI";

export const LOADING_REQUEST = 'LOADING_REQUEST';
export const GET_SUBREDDIT = 'GET_SUBREDDIT';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const loading = () => ({ type: LOADING_REQUEST });

const getChar = (data) => ({ type: GET_SUBREDDIT, payload: data});

const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error});

const fetchSubreddit = (subreddit) => {
  return (dispatch) => {
    dispatch(loading());
    return redditAPI(subreddit)
      .then((response) => {
        dispatch(getChar(response))
        if(!response) throw new Error()
      })
      .catch((error) => dispatch(failedRequest(error)))
  };
};

export default fetchSubreddit;
