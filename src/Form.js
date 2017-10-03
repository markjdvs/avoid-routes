import React from 'react';

export class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>Where from?
            <input></input>
          </label>
        </div>
        <div>
          <label>Where to?
            <input></input>
          </label>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    );
  }
}
