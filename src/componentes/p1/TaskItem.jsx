function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>
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

export default TaskItem;
