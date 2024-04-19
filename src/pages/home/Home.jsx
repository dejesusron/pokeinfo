import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="hero bg-left min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl lg:text-9xl font-bold">PokeInfo</h1>
            <p className="mb-5">
                All the Pokémon data you'll ever need in one place, easily accessible and user friendly.
            </p>
            <Link to='/dashboard/pokemon' className="btn btn-wide">Get Started</Link>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Home;