import React, { useState, useEffect } from "react";
import PageTodolist from "./pages/PageTodolist.jsx";
import PageTodolist2 from "./pages/PageTodolist2.jsx";
import Index from "./pages/Index.jsx";


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";

function App() {

  return (

     <Router> 
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/pageTodolist" element={<PageTodolist />} />
        <Route path="/pageTodolist2" element={<PageTodolist2 />} />
      </Routes>
     </Router>
  );
}

export default App;
