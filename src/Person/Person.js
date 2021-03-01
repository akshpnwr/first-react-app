import React from 'react';

import './Person.css';

const person = (props) => (
  <div className="Person">
    <p>
      I'm {props.name} and i'm {props.age} years old.
    </p>
    <p onClick={props.click}>{props.children}</p>
    <input type="text" value={props.name} onChange={props.changed} />
  </div>
);

export default person;
