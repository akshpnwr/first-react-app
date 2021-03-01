import React, { Component, useState } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Akash', age: 20 },
      { name: 'Aakriti', age: 21 },
      { name: 'Gnja', age: 22 },
    ],
  };

  switchNameHandler(newName) {
    this.setState({
      person: [
        { name: newName, age: 21 },
        { name: 'kriti', age: 20 },
        { name: 'Gnja', age: 22 },
      ],
    });
  }

  nameChangedHandler(e) {
    this.setState({
      person: [
        { name: 'Akash', age: 21 },
        { name: e.target.value, age: 20 },
        { name: 'Gnja', age: 22 },
      ],
    });
  }

  render() {
    const style = {
      border: '1px solid black',
      backgroundColor: 'white',
      color: 'black',
      padding: '10px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>hi, i'm a react app</h1>
        <p>Finally i'm learning react</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Aksh')}
        >
          Switch name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Aksh')}
          changed={this.nameChangedHandler.bind(this)}
        >
          And this Person is me.
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     person: [
//       { name: 'Akash', age: 20 },
//       { name: 'Aakriti', age: 21 },
//       { name: 'some girl', age: 18 },
//     ],
//   });

//   const [otherState, _] = useState('some other value');

//   const switchNameHandler = () => {
//     setPersonsState({
//       person: [
//         { name: 'Aksh', age: 20 },
//         { name: 'kriti', age: 21 },
//         { name: 'some girl', age: 18 },
//       ],
//     });
//   };
// };

export default App;
