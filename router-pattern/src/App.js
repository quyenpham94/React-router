import React from "react";
import Food from "./Food";
import FoodNav from "./FoodNav";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FoodNav />
        <Route path="/food/:name">
          <Food />
        </Route>
        {/* <Route path="/food/burrito">
          <Food name="burrito" />
        </Route>
        <Route path="/food/salad">
          <Food name="salad" />
        </Route>
        <Route path="/food/sushi">
          <Food name="sushi" />
        </Route>
        <Route path="/food/pasta">
          <Food name="pasta" />
        </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
