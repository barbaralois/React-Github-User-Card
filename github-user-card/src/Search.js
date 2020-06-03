import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.fetchUser}>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
        <button type="submit">Get New User</button>
      </form>
    );
  }
}
