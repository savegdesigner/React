import React from 'react'
import Button from 'react-bootstrap/Button'

export default props => {

    if(props.hide) {
        return null
    } else {
        return (
            <Button 
                className="mb-2"
                onClick={props.onClick}           
            >
                {props.name}
            </Button>
        )
    }
   

}