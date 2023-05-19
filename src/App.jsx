import { useState } from 'react';
import {ProductList} from './components/ProductList';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
<<<<<<< HEAD
      <h1 className='title' style={{color: "white"}}>F A K E  S T O R E</h1>
=======
      <h1 className='title'>Fake Store</h1>
>>>>>>> d10f7feec0ac1944338aee72189b7790452465df
      <ProductList/>
    </div>
     
  );
}

export default App
