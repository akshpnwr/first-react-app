import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  componentWillUnmount() {
    console.log('Person.js unmount');
  }

  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('Person.js shouldComponenetUpdate');

  //   return nextProp.persons !== this.props.persons;
  //   // return true;
  // }

  componentDidMount() {
    console.log('component mounted');
  }

  render() {
    console.log('rendering.....');
    return this.props.persons.map((p, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={p.name}
        age={p.age}
        key={p.id}
        change={(e) => this.props.changed(e, p.id)}
      />
    ));
  }
}

export default Persons;
