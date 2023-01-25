import { Component } from "react"

import PokErroeView from "./PokErroeView";
import PokDataView from "./PokDataView";
import PokPendingView from "./PokPendingView";
import { fetchPok } from "./pok-api/pok-api";

export default class PokInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    };
    
    componentDidUpdate(pProps, pState) {
        const prevName = pProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName!==nextName) { // --- порівнюємо поперед і теперіш пропси!
            this.setState({ status: 'pending' });

            fetchPok(nextName)
            .then(pokemon => this.setState({ pokemon, status:'resolved' }))
            .catch(error=>this.setState({ error, status:'rejected' }));
        }
    }

    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') return <p>Please, input pok name!</p>;
        if (status === 'pending') return <PokPendingView pokemonName={pokemonName} />;
        if (status === 'rejected') return <PokErroeView message={error.message} />;
        if (status === 'resolved') return <PokDataView pokemon={pokemon} />;
    }
};