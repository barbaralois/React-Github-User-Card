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
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/barbaralois`)
      .then((response) => {
        this.setState({
          user: {
            image: response.data.avatar_url,
            name: response.data.name,
            username: response.data.login,
            location: response.data.location,
            githubLink: response.data.html_url,
            followers: response.data.followers,
            following: response.data.following,
            bio: response.data.bio,
          },
        });
      })
      .catch((error) => {
        console.log(error);
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
          image: response.data.avatar_url,
          name: response.data.name,
          username: response.data.login,
          location: response.data.location,
          githubLink: response.data.html_url,
          followers: response.data.followers,
          following: response.data.following,
          bio: response.data.bio,
        },
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
        <User user={this.state.user} />
      </div>
    );
  }
}
