import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((p, index) => (
    <Person
      click={() => props.clicked(index)}
      name={p.name}
      age={p.age}
      key={p.id}
      change={(e) => props.changed(e, p.id)}
    />
  ));

export default persons;
