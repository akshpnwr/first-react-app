import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: 'Akash', age: 20 },
      { name: 'Aakriti', age: 21 },
      { name: 'some girl', age: 18 },
    ],
  });

  const [otherState, _] = useState('some other value');

  const switchNameHandler = () => {
    setPersonsState({
      person: [
        { name: 'Aksh', age: 20 },
        { name: 'kriti', age: 21 },
        { name: 'some girl', age: 18 },
      ],
    });
  };

  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>hi, i'm a react app</h1>
      <p>Finally i'm learning react</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.person[0].name}
        age={personsState.person[0].age}
      />
      <Person
        name={personsState.person[1].name}
        age={personsState.person[1].age}
      >
        And this Person is me.
      </Person>
      <Person
        name={personsState.person[2].name}
        age={personsState.person[2].age}
      />
    </div>
  );
};

export default app;
