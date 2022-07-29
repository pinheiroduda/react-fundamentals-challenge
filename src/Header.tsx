import rocketTodoLogo from './assets/todo-logo.svg'

export function Header() {
  return (
    <>
      <div>
        <img src={rocketTodoLogo} alt="todo list rocket logo" />
      </div>
    </>
  )
}