import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default props => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">TodoApp</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/todo">Tarefas</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                    <Button variant="outline-info">Pesquisar</Button>
                </Form>
            </Navbar>
      </>
    )
}