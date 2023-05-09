import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import { useEffect } from 'react';
import Sayfa from './component/Sayfa';



function App() {
  
  
  return (
    <div className="App">
      <Nav></Nav>     
      <Sayfa></Sayfa>
    </div>
  );
}

export default App;
