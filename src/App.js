import React,{useEffect,useState} from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import UserList from "./UserList";
import Home from "./Home";
import UserEdit from "./UserEdit";
import AddUser from "./AddUser";
import Login from "./Login";


const App=()=> {
  return(
      <Router>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route path='/crud' exact={true} element={<UserList/>}/>
              <Route path="/edit" element={<UserEdit/>}/>
              <Route path="/add" element={<AddUser/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
  )
}

export default App;
