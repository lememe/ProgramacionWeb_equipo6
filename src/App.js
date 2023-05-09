import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Tablas from './componentes/Tablas'

import { Component } from 'react';

  //class App extends Component{
    function App() {
   // render(){
      return(
        <div className='App'>
        
    <Header>
    </Header>
    
           <Banner>
           <Tablas></Tablas>
           </Banner>
           
    
        </div>
      )
    }
  //}
    
    export default App;
