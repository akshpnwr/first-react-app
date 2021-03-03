import React, { Component } from 'react';
import cs from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  state = {
    person: [
      { id: '101', name: 'Akash', age: 20 },
      { id: '102', name: 'Aakriti', age: 21 },
      { id: '103', name: 'Gnja', age: 22 },
    ],
    showPersons: false,
    showCockpit: true,
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
      <Aux>
        <button
          onClick={() => {
            this.setState({
              showCockpit: !this.state.showCockpit,
            });
          }}
        >
          Remove cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            personLength={this.state.person.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, cs.App);
