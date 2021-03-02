import React from 'react';
import cp from './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  const btnClass = [cp.button];

  if (props.showPersons) btnClass.push(cp.Red);

  if (props.person.length < 3) classes.push(cp.blue);
  if (props.person.length < 2) classes.push(cp.bold);

  return (
    <div>
      <h1>hi, i'm a react app</h1>
      <p className={classes.join(' ')}>Finally i'm learning react</p>
      <button className={btnClass.join(' ')} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
