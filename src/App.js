import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main.js';
import AllBeer from './pages/AllBeer.js';
import RandomBeerDetails from './pages/RandomBeerDetails.js';
import GetId from './components/GetId.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/allbeer" element={<AllBeer/>}/>
          <Route path="/randombeer" element={<RandomBeerDetails/>}/>
          <Route path="/allbeer/:id" element={<GetId/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
