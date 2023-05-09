import React, {Component} from 'react';
import './Banner.css';
import Tabla from './Tablas';


function Banner() {
    return (
      <div className="banner-container">
        <div className="banner-top">
          <p>Por una Juventud Integrada al Desarrollo de Mexico</p>
        </div>
       <Tabla></Tabla>
        <div className="banner-bottom">
          <p>Copyright@ Todos Los Derechos Reservados </p>
        </div>
      </div>
    );
  }
  

export default Banner;