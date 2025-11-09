import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
}
