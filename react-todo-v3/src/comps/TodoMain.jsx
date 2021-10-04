<<<<<<< HEAD
import AppContextProvider from "../context/AppContextProvider";
import "../css/TodoMain.css";
=======
import "../css/TodoMain.css";
import AppContextProvider from "../context/AppContextProvider";
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839

function TodoMain({ header, form, children }) {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div className="title">{header}</div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </AppContextProvider>
  );
}

export default TodoMain;
