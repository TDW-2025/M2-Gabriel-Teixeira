import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageTodolist from "./aulas/P1/PageTodolist.jsx";
import PageTodolist2 from "./aulas/P2/PageTodolist2.jsx";
import ATM from "./aulas/P3/ATM.jsx";
import CatApi from "./aulas/P4/catApi.jsx";
import Index from "./pages/Index.jsx";

import { TodoProvider, TodoContext } from "./context/TodoContext.jsx";

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

export default function App() {
  return (
    <TodoProvider>
      <Router>
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pageTodolist" element={<PageTodolist />} />
          <Route path="/pageTodolist2" element={<PageTodolist2 />} />
          <Route path="/atm" element={<ATM />} />
          <Route path="/catapi" element={<CatApi />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}
