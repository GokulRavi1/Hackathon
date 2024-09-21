import './App.css';
import CardSec from './Components/CardSec/CardSec';
import Challenges from './Components/Challenges/Challenges';
import Explore from './Components/Explore/Explore';
import HeroBottom from './Components/Herobottom/HeroBottom';
import Herosection from './Components/Herosection/Herosection';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <HeroBottom/>
      <Challenges/>
      <Explore/>
      <CardSec/>

     
    </div>
  );
}

export default App;
