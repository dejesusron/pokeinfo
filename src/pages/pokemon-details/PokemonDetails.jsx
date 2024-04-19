import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/loading/Loading';

const PokemonDetails = () => {
  const [pokeDetails, setPokeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokeDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.lgo(error);
    }
  }

  useEffect(() => {
    setLoading(true);

    getData();
  }, [])
  
  if (loading) {
      return (
          <Loading />
      )
  }

  return (
    <div className='px-4 pb-16 pt-24 lg:p-20'>
      <div>
        <h1 className='text-4xl font-bold mb-16'>{pokeDetails.name?.toUpperCase()}</h1>

        <div className='max-w-[200px] mx-auto mb-10'> 
          <div className="carousel w-full border-[5px] border-neutral mb-5">
            <div id="item1" className="carousel-item w-full">
              <img src={`${pokeDetails.sprites?.front_default}`} className="w-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
              <img src={`${pokeDetails.sprites?.back_default}`} className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
              <img src={`${pokeDetails.sprites?.front_shiny}`} className="w-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
              <img src={`${pokeDetails.sprites?.back_shiny}`} className="w-full" />
            </div> 
          </div> 
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-sm">Front</a> 
            <a href="#item2" className="btn btn-sm">Back</a> 
            <a href="#item3" className="btn btn-sm">Front Shiny</a> 
            <a href="#item4" className="btn btn-sm">Back Shiny</a>
          </div>
        </div>

        <div className='w-[100%] lg:w-max mx-auto mb-14'>
          <div className="stats shadow flex flex-wrap">
  
            <div className="stat w-max">
              <div className="stat-title">Base Exp</div>
              <div className="stat-value">{pokeDetails?.base_experience}</div>
            </div>
            
            <div className="stat w-max">
              <div className="stat-title">Height</div>
              <div className="stat-value">{pokeDetails?.height}</div>
            </div>
            
            <div className="stat w-max">
              <div className="stat-title">Weight</div>
              <div className="stat-value">{pokeDetails?.weight}</div>
            </div>

            <div className="stat w-max">
              <div className="stat-title">Moves</div>
              <div className="stat-value">{pokeDetails.moves?.length}</div>
            </div>
            
          </div>
        </div>

        <div className='mb-10 flex flex-col gap-y-4'>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium">
              Abilities
            </div>
            <div className="collapse-content"> 
              {pokeDetails.abilities?.map((item) => {
                return (
                  <p className='pl-4'>{item.ability.name}</p>
                )
              })}
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium">
              Moves
            </div>
            <div className="collapse-content"> 
              {pokeDetails.moves?.map((item) => {
                return (
                  <p className='pl-4'>{item.move.name}</p>
                )
              })}
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium">
              Games
            </div>
            <div className="collapse-content"> 
              {pokeDetails.game_indices?.map((item) => {
                return (
                  <p className='pl-4'>{item.version.name}</p>
                )
              })}
            </div>
          </div>

        </div>

        <div className='w-max mx-auto'>
          <Link to='/dashboard/pokemon' className="btn btn-wide btn-neutral hover:opacity-70">Go back to list</Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;