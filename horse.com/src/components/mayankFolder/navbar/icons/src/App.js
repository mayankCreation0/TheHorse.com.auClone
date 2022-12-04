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
     <Route element={<PrivateRoutes/>} >
  <Route  path='/' element={<HomePage/>} />
  <Route  path='/product/:id' element={<Details/>} />
  <Route  path='/product/:id/edit' element={<Edit/>} />
  <Route  path='/product/create' element={<Create/>} />
     <Route />

     </Route>
     </Routes>
     
    </div>
  );
}

export default App;
