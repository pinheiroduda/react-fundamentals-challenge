import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { ToDo } from './Todo'

import styles from './TodoList.module.css'

export function ToDoList() {
  const [toDo, setToDo] = useState(['']);
  const [newToDo, setNewToDo] = useState('');
  const [countToDoNumber, setCountToDoNumber] = useState(0);
  const [countToDo, setCountToDo] = useState(0);

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

  function deleteToDo(deletedToDo: string) {
    const toDoList = toDo.filter(todo => {
      return todo !== deletedToDo;
    })

    setToDo(toDoList);
  }

  function countNumberOfToDo() {
    setCountToDoNumber(countToDoNumber + 1);
  }

  function incrementToDo() {
    setCountToDo(countToDo + 1);
  }

  function decrementToDo() {
    setCountToDo(countToDo - 1);
  }

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleCreateToDo}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          value={newToDo}
          onChange={handleNewToDoChange}
        />
        <button type="submit" onClick={countNumberOfToDo}>   
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
        <header className={styles.header}>
            <div className={styles.headerContent}>
              <li className={styles.tasks}>Tarefas criadas</li>
              <li className={styles.tasksCounter}>{countToDoNumber}</li>
            </div>
            <div className={styles.headerContent}>
              <li className={styles.doneTasks}>Concluídas</li>
              <li className={styles.doneTasksCounter}>
                {countToDoNumber === 0 ? countToDo : (`${countToDo} de ${countToDoNumber}`)}
              </li>
            </div>
        </header>
        <div>
          {toDo.map(todo => {
            return  (
              <ToDo
                key={todo}
                content={todo}
                onDeleteToDo={deleteToDo}
                onIncrementToDo={incrementToDo}
                onDecrementToDo={decrementToDo}
              />
            )
          })}
        </div>
    </div>
  )
}