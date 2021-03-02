import React, { Component } from 'react';
import cs from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={cs.App}>
        <Cockpit
          person={this.state.person}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {/* <h1>hi, i'm a react app</h1>
        <p className={classes.join(' ')}>Finally i'm learning react</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}
        >
          Toggle persons
        </button> */}
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
