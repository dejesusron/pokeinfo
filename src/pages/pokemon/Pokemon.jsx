import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../../components/pokemon-list/PokemonList';
import Pagination from '../../components/pagination/Pagination';
import Loading from '../../components/loading/Loading';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [searchPage, setSearchPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=5000');
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setLoading(true);

        getData();
    }, [currentPage, searchPage]);

    useEffect(() => {
    //   console.log(search);
    }, [search])
    
    const getData = async () => {
        try {
            const response = await axios.get(currentPage);
            const searchResponse = await axios.get(searchPage);
            setNext(response.data.next);
            setPrev(response.data.previous);
            setPokemon(response.data.results);
            setSearchPokemon(searchResponse.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // search pokemon
    const searchList = searchPokemon.filter((item) => {
        return item.name.includes(search);
    }).map((item) => {
        return (
            <PokemonList key={item.url} pokemon={item}  /> 
        )
    })

    // display 20 pokemons
    const list = pokemon.filter((item) => {
        return item.name.includes(search);
    }).map((item) => {
        return ( 
            <PokemonList key={item.url} pokemon={item}  />
        )
    })

    const goToNextPage = () => {
        setSearch('');
        setCurrentPage(next);
    }

    const goToPrevPage = () => {
        setSearch('');
        setCurrentPage(prev);
    }

    const handleSearchChange = () => {
        setSearch(event.target.value.toLowerCase());
    }

    if (loading) {
        return (
            <Loading />
        )
    }
    
    return (
        <div className='py-20 lg:py-14 px-4 lg:px-10 relative'>
            <label className="input input-bordered flex items-center gap-2 mb-10 mt-6 bg-[#f2f2f2]">
                <input type="text" className="grow" onChange={handleSearchChange} placeholder="Search pokemon" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <div className='flex flex-wrap gap-4 justify-center'>
                {search ? searchList : list}
            </div>
            <div className='mt-10 w-1/2 mx-auto'>
                <Pagination
                    goToNextPage={next ? goToNextPage : null}
                    goToPrevPage={prev ? goToPrevPage : null}
                />
            </div>
        </div>
    );
};

export default Pokemon;