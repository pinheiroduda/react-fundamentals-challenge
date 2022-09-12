import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Todo.module.css'

export type ToDoType = {
  text: string,
  id: number,
}

interface ToDoProps {
  todo: ToDoType;
  onDeleteToDo: (id: number) => void;
  onDecrementNumberOfToDo: () => void;
  onIncrementToDo: () => void;
  onDecrementToDo: () => void;
}

export function ToDo({
  todo,
  onDeleteToDo,
  onDecrementNumberOfToDo,
  onIncrementToDo,
  onDecrementToDo
  }: ToDoProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleDeleteToDo(id: number) {
    onDeleteToDo(id);
    onDecrementNumberOfToDo();

    if (isChecked) {
      onDecrementToDo();
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.taskBox}>
        <button onClick={handleCheck}>
          {isChecked 
            ? <CheckCircle
                size={18}
                weight="fill"
                className={styles.checkedCheckbox}
                onClick={onDecrementToDo}
              /> 
            : <Circle
                size={18}
                className={styles.checkbox}
                onClick={onIncrementToDo}
              />
          }
        </button>
        <p 
          className={styles.taskText}
          style={isChecked ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}
        >
          {todo.text}
        </p>
        <button onClick={() => handleDeleteToDo(todo.id)}>
          <Trash size={16} className={styles.trashIcon}/>
        </button>
      </div>
    </div>
  )
}