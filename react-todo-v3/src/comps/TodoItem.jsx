import React from "react";
import "../css/TodoItem.css";
<<<<<<< HEAD

function TodoItem({ t_text }) {
  return (
    <div className="todo_item">
      <div className="todo_delete">&times;</div>
      <div className="todo_text">{t_text}</div>
      <div className="check_mark">&#x2713;</div>
=======
import { useTodoContext } from "../context/AppContextProvider";

function TodoItem({ todo }) {
  const { t_id, t_text, t_comp } = todo;
  const { onDeleteClick, onCompClick } = useTodoContext();
  return (
    <div className="todo_item">
      <div className="todo_delete" onClick={onDeleteClick} data-todo-id={t_id}>
        &times;
      </div>
      <div
        className={`todo_text ${t_comp && "checked"}  `}
        onClick={onCompClick}
        data-todo-id={t_id}
      >
        {t_text}
      </div>
      {/* 현재 todo의 t_comp 값이 true 일때만 이 tag 가 나타나도록 하라  */}
      {t_comp && <div className="check_mark">&#x2713;</div>}
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839
    </div>
  );
}

export default TodoItem;
