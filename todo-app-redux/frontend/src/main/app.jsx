import './app.scss'
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Menu from '../template/menu'
import Todo from '../todo/todo'
import About from '../about/about'

export default props =>  (

        <div className="">

            <Router>

                <Menu />

                <Switch>

                    <Route path='/todo' component={Todo}/>
                    <Route path='/about' component={About}/>
                    <Redirect from="*" to="/todo"/>

                </Switch>

            </Router>


        </div>
)   