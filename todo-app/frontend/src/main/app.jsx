import './app.scss'
import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from '../template/menu'
import Todo from '../todo/todo'
import About from '../about/about'

export default props =>  (

        <div className="">

            <Router>

                <Menu />

                <Switch>

                    <Route exact path='/todo' component={Todo}/>
                    <Route exact path='/about' component={About}/>

                </Switch>

            </Router>


        </div>
)   