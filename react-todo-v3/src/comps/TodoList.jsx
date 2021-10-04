import React from "react";
<<<<<<< HEAD
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";
=======
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/AppContextProvider";
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839

function TodoList() {
  const { todoList } = useTodoContext();

<<<<<<< HEAD
  const viewList = todoList.map(({ t_id, t_text, t_isComplete }) => {
    // todo.t_text
    return (
      <TodoItem
        key={t_id}
        t_id={t_id}
        t_text={t_text}
        t_isComplete={t_isComplete}
      />
    );
  });

  return <div>{viewList}</div>;
=======
  const listView = todoList.map((item) => {
    return <TodoItem todo={item} key={item.t_id} />;
  });

  return <div>{listView}</div>;
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839
}

export default TodoList;
