// This handles the App template on every "page"
import React, { PropTypes } from 'react';

//Declare that
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header pending...</p>
        {this.props.children}
      </div>
    );
  }
}

//Proptypes
App.propTypes = {
  children: PropTypes.object.isRequired
};

//Default export
export default App;
