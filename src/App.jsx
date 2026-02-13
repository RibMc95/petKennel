import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: initialData
    };
  }

  // Method to handle state changes from children
  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);
    const happyDog = initialData.find((char) => char.status === "Happy");
    const sadDog = initialData.find((char) => char.status === "Sad");

    const updatedCharacters = this.state.characters.map((char) => {
      if (char.id === id) {
        const nextStatus = char.status === "Happy" ? "Sad" : "Happy";
        const nextDog = nextStatus === "Happy" ? happyDog : sadDog;

        return {
          ...char,
          name: nextDog?.name || char.name,
          status: nextStatus,
          image: nextDog?.image || char.image
        };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Parent Component (Class-Based)</h1>

        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {this.state.characters.slice(0, 1).map((char) => (
            <ChildComponent
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
              onAction={this.handleUpdate}
              
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
