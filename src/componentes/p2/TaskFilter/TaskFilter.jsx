import React from "react";
import PropTypes from "prop-types";
import styles from "./TaskFilter.module.css"; // ✅ caminho correto

function TaskFilter({ filter, setFilter, search, setSearch }) {
  return (
    <div className={styles.taskFilter}>
      <div className={styles.filterButtons}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? styles.active : ""}
        >
          Ativas
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? styles.active : ""}
        >
          Concluídas
        </button>
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

TaskFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default TaskFilter;
