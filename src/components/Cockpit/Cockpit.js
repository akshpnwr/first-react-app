import React, { useEffect, useRef, useContext } from 'react';
import cp from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
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
      <button
        ref={toggleBtnRef}
        className={btnClass.join(' ')}
        onClick={props.clicked}
      >
        Toggle persons
      </button>
      {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default React.memo(cockpit);
