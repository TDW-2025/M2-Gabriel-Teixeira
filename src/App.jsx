import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageTodolist from "./pages/PageTodolist.jsx";
import PageTodolist2 from "./pages/PageTodolist2.jsx";
import Index from "./pages/Index.jsx";
import ATM from "./pages/ATM.jsx";

import { TodoProvider, TodoContext } from "./context/TodoContext";
import "./css/App.css";

function TitleUpdater() {
  const { tasks } = useContext(TodoContext);

  useEffect(() => {
    document.title =
      tasks.length === 0
        ? "To-Do List — sem tarefas"
        : `To-Do List (${tasks.length} tarefas)`;
  }, [tasks]);

  return null;
}

function App() {
  return (
    <TodoProvider>
      <Router>
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pageTodolist" element={<PageTodolist />} />
          <Route path="/pageTodolist2" element={<PageTodolist2 />} />
          <Route path="/atm" element={<ATM />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
