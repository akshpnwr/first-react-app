import React, { Component } from 'react';
import p from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropType from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
  }
  componentDidMount() {
    this.inputElRef.current.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and i'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElRef}
          value={this.props.name}
          onChange={this.props.change}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropType.func,
  name: PropType.string,
  age: PropType.number,
  change: PropType.func,
};

export default withClass(Person, p.Person);
