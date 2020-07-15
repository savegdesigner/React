import React from 'react'
import Form from 'react-bootstrap/Form'
import IconButton from '../template/iconButton'

export default props => {

    return (
            <Form inline className="container-fluid">
                <Form.Label htmlFor="input" srOnly>
                    Tarefa
                </Form.Label>
                
                <Form.Control
                    onChange={props.handleChange}
                    value={props.description}
                    className="mb-2 mr-sm-2"
                    id="input"
                    placeholder="Tarefa"
                />

                <IconButton 
                    style="btn-primary"             
                    name="Adicionar"
                    onClick={props.handleAdd}
                />
            </Form>
    )

}