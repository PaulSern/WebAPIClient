import React, { Component } from 'react';
const blue = {
  color: 'blue'
};
class Main extends Component {
  render() {
    return (
      <div>
        <h1 style={blue} class="mainheader">
          Welcome to ALL API
        </h1>

        <h3 class="mainheader">
          On the top, there is a few list of api you can check.
        </h3>
        <p />
      </div>
    );
  }
}

export default Main;
