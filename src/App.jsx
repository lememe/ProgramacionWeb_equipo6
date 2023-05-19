import { useState } from 'react';
import {ProductList} from './components/ProductList';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1 className='title' style={{color: "white"}}>F A K E  S T O R E</h1>
      <ProductList/>
    </div>
     
  );
}

export default App
