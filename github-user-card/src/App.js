import React from 'react';
import './index.css';
import axios from 'axios';
import Search from './Search';
import User from './User';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      input: '',
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/barbaralois`)
      .then((response) => {
        this.setState({
          user: {
            ...response.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.github.com/users/barbaralois/followers`)
      .then((response) => {
        this.setState({
          followers: [...response.data],
          input: '',
        });
      });
  }

  handleChange = (evt) => {
    this.setState({ input: evt.target.value });
  };

  fetchUser = (evt) => {
    evt.preventDefault();
    let username = this.state.input;
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      this.setState({
        user: {
          ...response.data,
        },
      });
    });
    axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then((response) => {
        this.setState({
          followers: [...response.data],
          input: '',
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>GitHub User Info</h1>
        </header>
        <Search
          handleChange={this.handleChange}
          input={this.state.input}
          fetchUser={this.fetchUser}
        />
        <User user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}
