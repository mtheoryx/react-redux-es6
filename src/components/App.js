// This handles the App template on every "page"
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

//Declare that
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

//Proptypes
App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

//Default export
export default connect(mapStateToProps)(App);
