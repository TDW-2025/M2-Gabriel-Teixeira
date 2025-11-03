import React from "react";
function TaskFilter({ filter, setFilter, search, setSearch }) {
  return (
    <div className="task-filter">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>Todas</button>
        <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Ativas</button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Concluídas</button>
      </div>
      <input
        type="text"
        placeholder="Pesquisar tarefa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default TaskFilter;
