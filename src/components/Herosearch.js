import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class Herosearch extends Component {
  constructor() {
    super();
    this.state = {
      addr: '',
      name: '',
      result: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const newQuery = {
      name: this.state.name
    };
    e.preventDefault();
    axios
      .get(
        `https://still-citadel-21008.herokuapp.com/gethero?hero=${
          this.state.name
        }`,
        qs.stringify(newQuery)
      )
      .then(result => {
        this.setState({ result: result.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center color">
          <h1>Search Marvel or DC superhero!</h1>
          <h2>Input text below to see superhero information</h2>
          <div class="mainheader">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="addr">Enter hero name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter hero name here"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <input type="submit" value="Submit" class="btn btn-info" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Herosearch;
