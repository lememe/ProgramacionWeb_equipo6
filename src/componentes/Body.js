import React, { Component, Fragment } from "react";
import './Body.css';
import PropTypes from "prop-types";
import {Button, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Body extends Component
{
    render()
    {
        const elementos=
        [
            {id:1, title:"Elemento", numero:1},
            {id:2, title:"Elemento", numero:2},
            {id:3, title:"Elemento", numero:3},
            {id:4, title:"Elemento", numero:4},
            {id:5, title:"Elemento", numero:5},
        ]
        const {texto}=this.props;
        return(
        <div>
            <p>{texto}</p>
            {
                elementos.map((p, index)=>
                {
                    return <Fragment key={index}>
                        <p>{p.id}. {p.title} {p.numero}</p>
                    </Fragment>
                })
            }
           


            < Button variant='danger' onClick={()=> alert ("Hola mundo desde boton!")}> Botonsote </Button>
              
        </div>
    )};
}

export default Body;

Body.propTypes={
    texto:PropTypes.string, elementos:PropTypes.array
}
Body.defaultProps={
    texto: "Texto 3"
}
