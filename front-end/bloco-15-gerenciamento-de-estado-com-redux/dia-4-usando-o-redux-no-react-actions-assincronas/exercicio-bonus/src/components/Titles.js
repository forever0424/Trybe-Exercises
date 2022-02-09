import React from 'react';
import { connect } from 'react-redux';
// import propTypes from 'prop-types';

class Titles extends React.Component {
  render() {
    const { loading, title, error } = this.props;
    if (!loading && title) {
      return (
        <ul>
          {title.map((obj) => <li key={obj.data.created}>{ obj.data.title }</li>)}
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  title: state.title,
  error: state.error,
});

export default connect(mapStateToProps)(Titles);
