// This handles the App template on every "page"
import React from 'react';

//Declare that
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
};

//Proptypes


//Export that
export default App.
