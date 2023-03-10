import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import Banner from './componentes/Banner';
import Banner2 from './componentes/Banner2';



class App extends Component {
  render(){
  return (
    <div className="App">
        <Banner
          texto="Texto #"
          numero={1}

        />
        <Header
        titulo="titulo #"        
        />
        <Banner2
        texto="Texto #"
        numero={2}/>
        <Body>{"/n"}</Body>
        <Footer>
          
           </Footer>
        
        
    </div>
  )};
}


export default App;

