import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import PrivateRoutes from './Components/PrivateRoutes';
 import Create from './Components/Create';
 import Edit from './Components/Edit';
 import Details from './Components/Details';
function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <HomePage/> */}
     <Routes>
      <Route path="/login" element={<Login/>}/>
    
  <Route  path='/' element={<HomePage/>} />
 
  
     </Routes>
     
    </div>
  );
}

export default App;
