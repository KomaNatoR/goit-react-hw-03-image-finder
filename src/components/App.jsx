import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import PokForm from "./Pokemon/PokForm";
import PokInfo from "./Pokemon/PokInfo";


export class App extends Component {
  state = {
    pokemonName: '',
    
  };

  hendleFormSubmit = (pokName) => {
    this.setState({ pokemonName: pokName });
  }

  render() {
    const { hendleFormSubmit } = this;
    const { pokemonName } = this.state;

    return (
      <div>
        <PokForm onSubmit={hendleFormSubmit} />
        <PokInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
};
