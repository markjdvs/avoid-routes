import React from 'react';

export class Form extends React.Component {
  render() {
    return (
      <form>
        <label>Where from?
          <input></input>
        </label>
        <label>Where to?
          <input></input>
        </label>
        <button>Search</button>
      </form>
    );
  }
}
