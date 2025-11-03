import TaskItem from "../TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p>Nenhuma tarefa encontrada.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
