import Task from "../Task/Task";
import './TaskList.scss'

interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: TaskItem[];
  onTaskCheck: (taskId: number) => void;
}

const TaskList = ({ tasks, onTaskCheck }: TaskListProps) => {
  return (
    <div className="task-list">
      {tasks.map((task: TaskItem) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onCheck={() => onTaskCheck(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;