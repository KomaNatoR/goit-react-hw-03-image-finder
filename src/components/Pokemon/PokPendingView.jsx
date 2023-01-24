import { ImSpinner } from "react-icons/im";
import PokDataView from "./PokDataView";
import errorImg from "./imageTemplate.jpg";

export default function PokPendingView({ pokemonName }) {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: errorImg,
                },
            },
        },
        stats:[],
    };

    return (
        <div>
            <div>
                <ImSpinner size="32" />
                Loading...
            </div>
            <PokDataView pokemon={pokemon} />
        </div>
    );
};