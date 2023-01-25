// import { Component } from "react";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// import PokForm from "./Pokemon/PokForm";
// import PokInfo from "./Pokemon/PokInfo";


// export class App extends Component {
//   state = {
//     pokemonName: '',
    
//   };

//   hendleFormSubmit = (pokName) => {
//     this.setState({ pokemonName: pokName });
//   }

//   render() {
//     const { hendleFormSubmit } = this;
//     const { pokemonName } = this.state;

//     return (
//       <div>
//         <PokForm onSubmit={hendleFormSubmit} />
//         <PokInfo pokemonName={pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// };

import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { AppDiv } from "./app.styled";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    pictName:'',
  };

  hendleFormSubmit = (name) => {
    this.setState({pictName:name});
  };

  render() {
    const { hendleFormSubmit } = this;
    const { pictName } = this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={hendleFormSubmit} />
        <ImageGallery pictName={pictName} />

        <ToastContainer autoClose={3000} />
      </AppDiv>
      
    );
  }
};
