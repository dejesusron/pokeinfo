import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Pokemon from './pages/pokemon/Pokemon';
import Evolution from './pages/evolution/Evolution';
import Moves from './pages/moves/Moves';
import PokemonDetails from './pages/pokemon-details/PokemonDetails';
import NotFound from './pages/not-found/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/dashboard' element={ <Dashboard /> }>
            <Route path='/dashboard/pokemon' element={<Pokemon />} />
            <Route path='/dashboard/pokemon/:id' element={<PokemonDetails />} />
            <Route path='/dashboard/evolution' element={<Evolution />} />
            <Route path='/dashboard/moves' element={<Moves />} />
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;