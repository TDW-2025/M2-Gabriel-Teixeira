import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../css/App.module.css";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskInput}>
      <input
        type="text"
        placeholder="Adicionar tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

TaskInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TaskInput;
