import './Task.scss'

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  onCheck: () => void
}

const Task = ({ id, title, completed, onCheck }: TaskProps) => {

  return (
    <div className="task">
      <input
        id={id.toString()}
        name={id.toString()}
        type="checkbox"
        checked={completed}
        onChange={onCheck}
        className='task--check'
      />
      <label htmlFor={id.toString()} className={`task--title ${completed ? 'completed' : ''}`}>{title}</label>
    </div>
  );
};

export default Task;