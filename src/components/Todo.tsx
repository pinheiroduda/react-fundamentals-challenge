import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Todo.module.css'

interface ToDoProps {
  content: string;
}

export function ToDo({content}: ToDoProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.taskBox}>
        <button onClick={handleCheck}>
          {isChecked ? <CheckCircle size={18} weight="fill" className={styles.checkedCheckbox}/> : <Circle size={18} className={styles.checkbox}/>}
        </button>
        <p className={styles.taskText}>{content}</p>
        <button><Trash size={16} className={styles.trashIcon}/></button>
    </div>
  )
}