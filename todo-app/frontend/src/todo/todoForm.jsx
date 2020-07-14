import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default props => (

    <div>
            <Form inline className="container-fluid">
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                    Tarefa
                </Form.Label>
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Tarefa"
                />

                <Button type="submit" className="mb-2">
                    Adicionar
                </Button>
            </Form>
    </div>

)