import React, { Component } from 'react';


import './App.css';
import Die from './Die';
import DiceSet from './DiceSet';
import DeadlyDoubles from './DeadlyDoubles';
import PsychicDice from './PsychicDice';
import RollEm from './RollEm';
import Table from './Table';
import Tables from './Tables';
import SimpleDeadlyDoublesTable from './SimpleDeadlyDoublesTable';
import SimpleTable from './SimpleTable';

import Casino from './Casino';

function App() {
  return (
    <div className="App">
      {/* <Die val={3} />
      <DiceSet vals={[1, 2, 3]} />
      <PsychicDice addWin={() => "ignored"} addLoss={() => "ignored"} />
      <DeadlyDoubles addWin={() => "ignored"} addLoss={() => "ignored"} />
      <RollEm />
      <Table game={DeadlyDoubles} title="Deadly Double" />
      <Tables />
      <SimpleDeadlyDoublesTable />
      <SimpleTable game={DeadlyDoubles} title="Deadly Doubles" />
      <SimpleTable game={RollEm} title="Roll Em" /> */}

      <Casino />
    </div>
  );
}

export default App;
