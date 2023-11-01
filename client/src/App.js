import './App.css';
import React from 'react';
import {NavBarDetail, NavBarForm, NavBarHome} from './Components/NavBar/NavBar';
import { Landing, Home, Form, Detail } from './Views';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route 
            path="/home" 
            element={
              <React.Fragment>
                <NavBarHome />
                <Home />
              </React.Fragment>
            } 
          />

          <Route 
            path="/detail/:id" 
            element={ 
              <React.Fragment>
                <NavBarDetail />
                <Detail />
              </React.Fragment>
            } 
          />

          <Route path="/create" 
            element={
              <React.Fragment>
                <NavBarForm />
                <Form />
              </React.Fragment>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



//? RECUERDA: Puedes poner el BrowserRouter aqui o en App