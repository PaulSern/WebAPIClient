import React, { Component } from 'react';
import axios from 'axios';

class Herohistory extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      result: [
        {
          name: '',
          publisher: '',
          gender: '',
          race: '',
          image: ''
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ result: [] });
    axios
      .get('https://still-citadel-21008.herokuapp.com/deletehero')
      .then(result => {
        console.log('All delete');
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  getallhero = () => {
    axios
      .get('https://still-citadel-21008.herokuapp.com/getallhero')
      .then(result => {
        this.setState({ result: result.data });
        console.log(this.state.result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getallhero();
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center color">
          <h1>History Searches of Heroes</h1>
        </div>
        <div className="row container-fluid">
          <div className="col-md-1 text-center">
            <button
              className="btn btn-danger btn-lg"
              onClick={this.handleClick}
            >
              Delete All
            </button>
            <p />
          </div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Hero Name</th>
                <th>Gender</th>
                <th>Race</th>
                <th>Publisher</th>
                <th>Image</th>
              </tr>
              {this.state.result.map(result => {
                return (
                  <tr key={result.name}>
                    <td>{result.name}</td>
                    <td>{result.gender}</td>
                    <td>{result.race}</td>
                    <td>{result.publisher}</td>
                    <td>
                      <img src={result.image} width="100px" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Herohistory;
