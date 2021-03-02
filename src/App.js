import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { id: '101', name: 'Akash', age: 20 },
      { id: '102', name: 'Aakriti', age: 21 },
      { id: '103', name: 'Gnja', age: 22 },
    ],
    showPersons: false,
  };

  // switchNameHandler(newName) {
  //   this.setState({
  //     person: [
  //       { name: newName, age: 21 },
  //       { name: 'kriti', age: 20 },
  //       { name: 'Gnja', age: 22 },
  //     ],
  //   });
  // }

  deletePersonHandler = (index) => {
    // const person = this.state.person.slice();
    // person.splice(index, 1);
    // this.setState(person);
    // const person = this.state.person;

    const person = [...this.state.person];

    person.splice(index, 1);

    this.setState({ person: person });
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.person.findIndex((p) => p.id === id);

    const p = { ...this.state.person[personIndex] };

    p.name = e.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = p;

    this.setState({
      person: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    const StyleButton = styled.button`
      border: 1px solid black;
      background-color: ${(props) => (props.alt ? 'red' : 'green')};
      color: white;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => (props.alt ? 'salmon' : 'blue')};
      }
    `;

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((p, index) => (
            <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(e) => this.nameChangedHandler(e, p.id)}
            />
          ))}
        </div>
      );
    }

    const classes = [];

    if (this.state.person.length < 3) classes.push('blue');
    if (this.state.person.length < 2) classes.push('bold');

    return (
      <div className="App">
        <h1>hi, i'm a react app</h1>
        <p className={classes.join(' ')}>Finally i'm learning react</p>
        <StyleButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle persons
        </StyleButton>
        {persons}
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
