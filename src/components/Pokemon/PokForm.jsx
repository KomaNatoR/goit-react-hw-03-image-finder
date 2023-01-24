import { Component } from "react";
import { ImSearch } from 'react-icons/im';
import { toast } from "react-toastify";


class PokForm extends Component {
    state = {
        pokemonName:'',
    }

    hendleNameChange = (e) => {
        const { value } = e.currentTarget;

        this.setState({ pokemonName: value.toLowerCase() });
    }
    hendleSubmit = (e) => {
        e.preventDefault();
        const { pokemonName } = this.state;

        if (pokemonName.trim() === '') toast.error('input name, pleace!');
        this.props.onSubmit(pokemonName);
        this.setState({ pokemonName:''});
    }

    render() {
        const { hendleSubmit,hendleNameChange } = this;
        const { pokemonName } = this.state;

        return (
            <form onSubmit={hendleSubmit}>
                <input
                    type="pokemonName"
                    value={pokemonName}
                    onChange={hendleNameChange}
                />
                <button type="submit">
                    <ImSearch />
                </button>
            </form>
        );
    }
};
export default PokForm;