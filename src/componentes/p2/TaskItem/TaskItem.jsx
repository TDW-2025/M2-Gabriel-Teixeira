import React from "react";
import PropTypes from "prop-types";
import styles from "../TaskItem/TaskItem.module.css";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`${styles.taskItem} ${task.done ? styles.done : ""}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>🗑</button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
