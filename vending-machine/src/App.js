import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Chips from './Chips';
import Soda from './Soda';


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
      <VendingMachine />
    </Route>
    <Route exact path="/soda">
      <Soda />
    </Route>
    <Route exact path="/chips">
      <Chips />
    </Route>
    <Route exact path="/sardines">
      <Sardines />
    </Route>
    </BrowserRouter>
  );
}

export default App;
