import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    persons: [
      { id: "nial", name: "Max", age: 28 },
      { id: "asdf", name: "Manu", age: 29 },
      { id: "wefw", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    enteredText: ""
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  textChangedHandler = (event) => {
    const newText = event.target.value;

    this.setState({ enteredText: newText });
  };

  deleteCharHandler = (charIndex) => {
    const text = this.state.enteredText.split("");
    text.splice(charIndex, 1);
    const updatedText = text.join("");
    this.setState({ enteredText: updatedText });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const chars = this.state.enteredText.split("").map((character, index) => {
      return (
        <Char
          char={character}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}

        <br />
        <br />
        <br />

        <input
          type="text"
          value={this.state.enteredText}
          onChange={(event) => {
            this.textChangedHandler(event);
          }}
        />
        <br />
        <br />
        <p>{this.state.enteredText.length}</p>
        <br />
        <Validation length={this.state.enteredText.length} />
        <br />
        {chars}
        <br />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
