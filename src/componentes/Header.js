import React, {Component} from 'react';
import './header.css';
import imagen from '../tec.jpg'

class Header extends Component
{
    render()
    {
        return(
            
           <img src={imagen} width ="400"/>
        )
    }
}

export default Header;