import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { ToDo } from './Todo'

import styles from './TodoList.module.css'

export function ToDoList() {
  const [toDo, setToDo] = useState(['']);
  const [newToDo, setNewToDo] = useState('');

  function handleCreateToDo(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    setToDo([
      ...toDo,
      newToDo
    ])

    setNewToDo('');
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewToDo(event.target.value);
  }

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleCreateToDo}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          value={newToDo}
          onChange={handleNewToDoChange}
        />
        <button type="submit">   
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
        <header className={styles.header}>
            <div className={styles.headerContent}>
              <li className={styles.tasks}>Tarefas criadas</li>
              <li className={styles.tasksCounter}>0</li>
            </div>
            <div className={styles.headerContent}>
              <li className={styles.doneTasks}>Concluídas</li>
              <li className={styles.doneTasksCounter}>0</li>
            </div>
        </header>
        <div>
          {toDo.map(todo => {
            return  <ToDo key={todo} content={todo}/>
          })}
        </div>
    </div>
  )
}