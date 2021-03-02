import React from 'react';
import p from './Person.css';

const person = (props) => {
  return (
    <div className={p.Person}>
      <p onClick={props.click}>
        I'm {props.name} and i'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.change} />
    </div>
  );
};

export default person;
