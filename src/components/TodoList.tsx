import {PlusCircle} from 'phosphor-react';
import { ToDo } from './Todo'

import styles from './TodoList.module.css'

export function ToDoList() {
  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <textarea placeholder="Adicione uma nova tarefa"></textarea>
        <button type="submit">   
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <div>
        <ToDo />
      </div>
    </div>
  )
}