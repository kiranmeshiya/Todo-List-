import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Admin/login';
import Register from './Admin/Register';
import Admindeshboard from './Admin/Admindeshboard';
import Addtask from './Admin/Addtask';
import Userdeshboard from './User/Userdeshboard';
import Completetask from './User/Completetask';
import Declinetask from './User/Decline';

function App() {
  return (
  <>
   
 
    <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admindeshboard/>}/>
        <Route path="/addtask" element={<Addtask/>}/>
        <Route path="/user" element={<Userdeshboard/>}/>
        <Route path="/complete" element={<Completetask/>}/>
        <Route path="/decline" element={<Declinetask/>}/>
        

        

      </Routes>
   
 
  </>
  );
}

export default App;
