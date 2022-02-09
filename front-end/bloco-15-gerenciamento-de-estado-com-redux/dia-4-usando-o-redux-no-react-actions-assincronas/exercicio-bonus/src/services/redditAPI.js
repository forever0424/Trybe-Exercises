const redditAPI = (subreddit) => (
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default redditAPI;
