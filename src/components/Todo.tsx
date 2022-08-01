import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Todo.module.css'

export function ToDo() {
  return (
    <div className={styles.content}>
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
      <div className={styles.taskBox}>
        <button>
          <Circle size={18} className={styles.checkbox}/>
          <CheckCircle size={18} weight="fill" className={styles.checkedCheckbox}/>
        </button>
        <p className={styles.taskText}>Iniciar o desenvolvimento das funcionalidades do desafio.</p>
        <button><Trash size={16} className={styles.trashIcon}/></button>
      </div>
    </div>
  )
}