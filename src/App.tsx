import { useState } from 'react';
import './App.scss'
import TaskList from './TaskList/TaskList';
import TaskCompleted from './TaskCompleted/TaskCompleted';
import Confetti from 'react-confetti';
import { FcTodoList, FcInspection } from "react-icons/fc";

interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

const Tasks: TaskItem[] = [
  { id: 1, title: 'Completar taller de TypeScript', completed: false },
  { id: 2, title: 'Estudiar programación funcional', completed: false },
  { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
  { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
  { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
  { id: 6, title: 'Hacer ejercicio', completed: true },
  { id: 7, title: 'Comprar víveres', completed: false },
  { id: 8, title: 'Llamar al médico', completed: false },
  { id: 9, title: 'Limpiar la casa', completed: true },
  { id: 10, title: 'Actualizar el CV', completed: false }
]

function App() {
  const [task, setTask] = useState<TaskItem>({ id: 0, title: '', completed: false })
  const [tasks, setTasks] = useState<TaskItem[]>(Tasks);

  const handleTaskCheck = (taskId: number): void => {
    const updatedTasks = tasks.map((task: TaskItem) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleCompleted = (): boolean => {
    const numCompleted: number = tasks.reduce((accumulator: number, task: TaskItem): number => task.completed ? accumulator + 1 : accumulator, 0)
    return numCompleted === tasks.length ? true : false
  };

  const handleChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLInputElement;
    setTask({ ...task, title: target.value, id: tasks.length + 1 })
  }

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    setTasks([...tasks, task])
    setTask({ id: 0, title: '', completed: false })
  }

  return (
    <section className="container">
      <h1 className='container__title'>Task List <FcTodoList size={40} /></h1>
      <div className='container-task-list'>
        <form onSubmit={handleSubmit} className='container-task-list__form'>
          <FcInspection size={20} className='container-task-list__form--icon' />
          <input
            type="text"
            value={task.title}
            onChange={handleChange}
            placeholder="Write a new task"
            className='container-task-list__form--inputTask'
            required
          />
          <button type='submit' className='container-task-list__form--button'> add </button>
        </form>
        <TaskList tasks={tasks} onTaskCheck={handleTaskCheck} />
      </div>
      <TaskCompleted tasks={tasks} />
      {handleCompleted() && <Confetti />}
    </section>
  );
}

export default App
