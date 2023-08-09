import { useState } from "react";
import { FcSearch, FcNext } from "react-icons/fc";
import './TaskCompleted.scss';

interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: TaskItem[]
}

const TaskCompleted = ({ tasks }: TaskListProps) => {
  const [search, setSearch] = useState<string>('')
  const handleChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value)
  }
  const filtertask: TaskItem[] = tasks.filter((task: TaskItem) => { return task.title.toLowerCase().includes(search.toLowerCase()) });
  return (
    <div className="task-completed">
      <h3 className="task-completed--title">Completed tasks</h3>
      <FcSearch size={20} className='task-completed--icon' />
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Write task to search"
        className="task-completed--search"
      />
      {filtertask.map((task: TaskItem) => {
        return task.completed
          ? (
            <p className="task-completed--task" key={task.id}><FcNext size={15} />{task.title}</p>
          )
          : null
      })}
    </div>
  )
}

export default TaskCompleted
