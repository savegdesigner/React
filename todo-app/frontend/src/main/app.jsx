// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'

import './app.scss'
import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

import { BrowserRouter as Router} from 'react-router-dom'

export default props =>  (

        <div className="">

            <Menu />

            <Router>

                <Routes />

            </Router>

        </div>
)   