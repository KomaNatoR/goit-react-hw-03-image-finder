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
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

export class App extends Component {
  state = {
    pictName: '',
    imgData: [],
    modalPict: null,
    screen:'idle',
  };
  // -------------------------------------------------|   МЕТОДИ ЦИКЛУ
  componentDidMount() { }
  
  componentDidUpdate(pProps, pState) {
    const { succesFeych } = this;
    const { pictName } = this.state;
    const KEY = '31888671-f215a97b976f323f834fb73b1';

    if (pState.pictName !== pictName) {
      this.setState({ screen: 'pending', imgData: [], });

      fetch(`https://pixabay.com/api/?q=${pictName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(resp => resp.json())
        .then(succesFeych)
        // .then(({ hits }) => this.setState({ imgData: hits, loading: false, }))
        .catch(Error => this.setState({ screen: 'error', }));
    }
  };

  // -------------------------------------------------|   ОБРОБКА ФЕТЧА
  succesFeych = ({ hits }) => {
    if (hits.length<1) {
    return this.setState({ screen: 'error', });
    };
    return this.setState({ imgData: hits,screen: 'succes', });
  }

  // -------------------------------------------------|   КАСТОМНІ МЕТОДИ
  hendleFormSubmit = (name) => {
    this.setState({pictName:name});
  };
  takeImgId = (id) => {
    const { imgData } = this.state;
    const findImg = imgData.find(img => img.id === id);
    // console.log(findImg);
    
    this.setState(({modalPict})=>({modalPict:findImg,}));
  };
  toggleModal = () => {
    this.setState(({modalPict})=>({modalPict:null,}));
  };

  render() {
    const { hendleFormSubmit, toggleModal, takeImgId } = this;
    const { imgData, modalPict, screen } = this.state;
    // console.log(screen);

    return (
      <AppDiv>
        <Searchbar onSubmit={hendleFormSubmit} />
        <ImageGallery imgData={imgData} takeImgId={takeImgId} />
        <Loader screenText={screen} />

        {modalPict && <Modal toggleModal={toggleModal} modalPict={modalPict} />}
        
        <ToastContainer autoClose={2000} />
      </AppDiv>
      
    );
  }
};
