import './App.css';
import {Routes,Route} from "react-router-dom"
import Continents from './pages/Continents';
import Country from './pages/Country';
import Destinations from './pages/Destinations';
import Place from './pages/Place';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents/>}/>
        <Route path="/:continent" element={<Country />}/>
        <Route path="/:continent/:country" element={<Destinations />}/>
        <Route path="/:continent/:country/:destination" element={<Place />}/>
      </Routes>
    </div>
  );
}

export default App;
