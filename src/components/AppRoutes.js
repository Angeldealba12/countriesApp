import React from 'react'
import {
    BrowserRouter as Router, Switch, Route
  } from "react-router-dom";
import { CountryPage } from './CountryPage';
import Home from './Home';
import NavTab from './NavTab';
import Search from './Search';

const AppRoutes = () => {

    return (
        <Router>
            <NavTab />
            <Switch>
                <Route path="/search" exact component={Search} />
                <Route path="/" exact component={Home} />
                <Route path="/country/:username" exact component={CountryPage} />
            </Switch>
        </Router>
    )
}

export default AppRoutes