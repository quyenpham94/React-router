import React from 'react';
import DogList from './DogList';
import { Route, Switch, Redirect } from 'react-router-dom';
import FilterDogDetails from './FilterDogDetails';  


const Routes = ({dogs}) => {
    return (
        <Switch>
            <Route exact path='/dogs'>
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name">
                <FilterDogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
       
    )
}

export default Routes;