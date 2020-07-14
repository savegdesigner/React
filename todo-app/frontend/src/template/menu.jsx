import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>TodoApp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/todo">Tarefas</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                        <Button variant="outline-info">Pesquisar</Button>
                    </Form>
            </Navbar>
      </>
    )
}