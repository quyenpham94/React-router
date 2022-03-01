import React from 'react';
import Counters from './Counters';
import CounterHOC from './HOC/counterUsingHOC';
import ThingCounter from './HOC/thingCounter';
import CounterWithHooks from './Hooks/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counters /> */}
      {/* <ThingCounter />
      <CounterHOC color="pink"/> */}
      <CounterWithHooks />
    </div>
  );
};

export default App;
