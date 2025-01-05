import React, { useState } from 'react';
import HomePage from '../src/pages/HomePage';
import PageNotFound from '../src/pages/NotFoundPage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import  './index.css';

import './App.css';

function App(): React.ReactElement {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;
