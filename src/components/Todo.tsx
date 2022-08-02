import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import styles from './Todo.module.css'

interface ToDoProps {
  content: string;
  onDeleteToDo: (deletedToDo: string) => void;
  onIncrementToDo: () => void;
  onDecrementToDo: () => void;
}

export function ToDo({content, onDeleteToDo, onIncrementToDo, onDecrementToDo}: ToDoProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleDeleteToDo() {
    onDeleteToDo(content);
  }

  // useEffect(() => {

  // }, [countToDo]);
  
  return (
    <div className={styles.taskBox}>
        <button onClick={handleCheck}>
          {isChecked 
            ? <CheckCircle size={18} weight="fill" className={styles.checkedCheckbox} onClick={onDecrementToDo}/> 
            : <Circle size={18} className={styles.checkbox}  onClick={onIncrementToDo}/>
          }
        </button>
        <p className={styles.taskText}>{content}</p>
        <button onClick={handleDeleteToDo}><Trash size={16} className={styles.trashIcon}/></button>
    </div>
  )
}