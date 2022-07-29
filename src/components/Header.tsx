import rocketTodoLogo from '../assets/todo-logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src={rocketTodoLogo} alt="todo list rocket logo" />
      </div>
    </>
  )
}