import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (

    <Switch>

        <Route path='/todo' component={Todo}/>
        <Route path='/about' component={About}/>
        {/* <Redirect from='*' to='/' /> */}

    </Switch>

)