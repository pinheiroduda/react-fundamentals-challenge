import Clipboard from '../assets/Clipboard.svg'

import styles from './EmptyTodoList.module.css'

export function EmptyToDoList() {
  return (
    <div className={styles.content}>
      <img src={Clipboard} alt="gray clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}