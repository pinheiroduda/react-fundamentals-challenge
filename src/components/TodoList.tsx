import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './TodoList.module.css'

export function ToDoList() {
  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <textarea placeholder="Adicione uma nova tarefa"></textarea>
        <button type="submit">   
          Criar
          <FontAwesomeIcon icon={['fat', 'circle-plus']} />
        </button>
      </form>
      <div>
        Aqui serão renderizadas as tarefas
      </div>
    </div>
  )
}