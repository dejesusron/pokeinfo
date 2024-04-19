import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList = ({ pokemon }) => {
    const [pokeInfo, setPokeInfo] = useState([]);

    useEffect(() => {
      getData();
    }, [pokemon]);
    
    const getData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`);
            setPokeInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Link to={`/dashboard/pokemon/${pokeInfo.id}`} className="card w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-base-100 shadow-xl p-4 border border-slate-300">
                <figure><img src={pokeInfo.sprites?.front_default} alt={pokeInfo.name} /></figure>
                <div className="card-body p-2">
                    <h2 className="card-title justify-center">{pokeInfo.name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default PokemonList;