import React, { useState, useEffect } from "react";
import TaskInput from "../componentes/p1/TaskInput";
import TaskList from "../componentes/p1/TaskList";
import TaskFilter from "../componentes/p1/TaskFilter";
import ConfirmDialog from "../componentes/p1/ConfirmDialog";
import background from "../assets/baroque-bg.png";

import "../App.css";

function PageTodolist2() {

  // adicionar aqui o react router, depois entre cada pagia usar o Link do react router 

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [dialog, setDialog] = useState(null);

  // posição da lista
  const [position, setPosition] = useState({ x: 110, y: 110 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) {
      setMessage("Escreve algo antes de adicionar!");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    const newTask = { id: Date.now(), text, done: false };
    setTasks([...tasks, newTask]);
    setMessage("Tarefa adicionada!");
    setTimeout(() => setMessage(""), 1500);
  };

  // Alterna o estado de conclusão da tarefa
  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const askDelete = (action, payload = null) => setDialog({ action, payload });
  const cancelDelete = () => setDialog(null);

  const confirmDelete = () => {
    if (!dialog) return;
    const { action, payload } = dialog;

    if (action === "single") {
      setTasks(tasks.filter((t) => t.id !== payload));
    } else if (action === "completed") {
      setTasks(tasks.filter((t) => !t.done));
    } else if (action === "all") {
      setTasks([]);
    }

    setDialog(null);
  };

  // Filtra as tarefas com base no filtro e na pesquisa
  const filteredTasks = tasks.filter((t) => {
    const matchFilter =
      filter === "completed" ? t.done : filter === "active" ? !t.done : true;
    const matchSearch = t.text.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;
  const active = total - completed;

  const getDialogMessage = () => {
    if (!dialog) return "";
    if (dialog.action === "single") return "Queres apagar esta tarefa?";
    if (dialog.action === "completed") return "Apagar todas as concluídas?";
    if (dialog.action === "all") return "Tens a certeza que queres apagar TODAS as tarefas?";
  };

  // Funções para arrastar a lista
  const startDrag = (e) => {
    setDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const duringDrag = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const stopDrag = () => setDragging(false);

  return (
    <div
      className="background-wrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
      onMouseMove={duringDrag}
      onMouseUp={stopDrag}
    >
      <div
        className="app-container draggable"
        onMouseDown={startDrag}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: dragging ? "grabbing" : "grab",
        }}
      >
        <h1>To-Do List impostor</h1>

        {message && <p className="message">{message}</p>}

        <TaskInput onAdd={addTask} />

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        <div className="task-stats">
          <span>{active} ativas / {completed} concluídas</span>
          <div className="action-buttons">
            {completed > 0 && (
              <button
                onClick={() => askDelete("completed")}
                className="clear-btn"
              >
                Apagar concluídas
              </button>
            )}
            {total > 0 && (
              <button
                onClick={() => askDelete("all")}
                className="clear-all-btn"
              >
                Apagar tudo
              </button>
            )}
          </div>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={(id) => askDelete("single", id)}
        />

        <ConfirmDialog
          visible={!!dialog}
          title="Confirmação"
          message={getDialogMessage()}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </div>
    </div>
  );
}

export default PageTodolist2;
