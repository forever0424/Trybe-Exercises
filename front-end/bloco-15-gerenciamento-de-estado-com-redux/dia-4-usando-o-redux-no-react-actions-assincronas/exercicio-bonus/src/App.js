import React from 'react';
import { connect } from 'react-redux';
import Titles from './components/Titles';
import fetchSubreddit from './redux/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subreddit: 'Frontend',
    }
  }

  componentDidMount() {
    const { fetchSubreddit } = this.props;
    fetchSubreddit(this.state.subreddit);
  }

  change = (e) => {
    const { fetchSubreddit } = this.props;
    this.setState({ subreddit: e.target.value })
    fetchSubreddit(e.target.value);
  }

  render() {
    return (
    <div className="App">
      {`Selected: ${this.state.subreddit}`}
      <select onChange={ this.change }>
        <option defaultValue >Frontend</option>
        <option>Reactjs</option>
      </select>
      <Titles />
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSubreddit: (subreddit) => dispatch(fetchSubreddit(subreddit))
});

export default connect(null, mapDispatchToProps)(App);
