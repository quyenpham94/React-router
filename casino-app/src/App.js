import './App.css';
import Die from './Die';
import DiceSet from './DiceSet';
import DeadlyDoubles from './DeadlyDoubles';

function App() {
  return (
    <div className="App">
      <Die val={3} />
      <DiceSet vals={[1, 2, 3]} />
      <DeadlyDoubles />
    </div>
  );
}

export default App;
