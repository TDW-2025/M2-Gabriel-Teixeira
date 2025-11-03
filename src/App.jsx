import React, { useState, useEffect } from "react";
import PageTodolist from "./pages/PageTodolist.jsx";
import PageTodolist2 from "./pages/PageTodolist2.jsx";




import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";

function App() {

  // adicionar aqui o react router, depois entre cada pagia usar o Link do react router 

  return (

     <Router> 
      <Routes>
        <Route path="/*" />
        <Route path="/pageTodolist" element={<PageTodolist />} />
        <Route path="/pageTodolist2" element={<PageTodolist2 />} />
      </Routes>
     </Router>
  );
}

export default App;
