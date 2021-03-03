import React, { Component } from 'react';
import p from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and i'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.change}
        />
      </Aux>
    );
  }
}

export default Person;
