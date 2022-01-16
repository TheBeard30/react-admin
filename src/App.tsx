import React from 'react';
import './App.less';
import {Login} from "./pages/login";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {PageLayout} from "./pages/layout/PageLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<PageLayout/>}>
          <Route path='/home' element={<Home/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
