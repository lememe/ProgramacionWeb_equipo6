import React, {Component} from 'react';
import './Header.css';
import imagen from '../masca.jpg'

class Header extends Component
{
    render()
    {
        return(
            
           <img src={imagen} width ="95"/>
        )
    }
}

export default Header;