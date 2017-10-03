import React from 'react';
import {Form} from './Form';
import {Map} from './Map';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Map />
      </div>
    );
  }
}
