import React, { useEffect } from 'react';
import cp from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('ho ho ho ');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('cleanup work in use effect');
    };
  }, []);

  const classes = [];
  const btnClass = [cp.button];

  if (props.showPersons) btnClass.push(cp.Red);

  if (props.personLength < 3) classes.push(cp.blue);
  if (props.personLength < 2) classes.push(cp.bold);

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

export default React.memo(cockpit);
