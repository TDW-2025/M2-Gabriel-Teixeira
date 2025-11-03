import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Index() {

  return (
    <div>
        <h1>Exercises TDW 👾</h1>
        <Link to="/pageTodolist">Ir para To-Do List</Link>
        <br />
        <Link to="/pageTodolist2">Ir para To-Do List fake</Link>
    </div>
  );
}

export default Index;
