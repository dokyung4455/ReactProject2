<<<<<<< HEAD
import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
  const { todo, onChange, onKeyPress, onClick } = useTodoContext();
  return (
    <div className="form">
      <input value={todo.t_text} onChange={onChange} onKeyPress={onKeyPress} />
=======
import "../css/TodoInput.css";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { inputId, todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="form">
      <input
        ref={inputId}
        onChange={onChange}
        value={todo.t_text}
        onKeyPress={onKeyPress}
      />
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
