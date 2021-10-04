<<<<<<< HEAD
=======
import logo from "./logo.svg";
import "./App.css";
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import MyButton from "./comps/MyButton";
import HomeButton from "./comps/HomeButton";
import CompButton from "./comps/CompButton";
<<<<<<< HEAD
const App = () => {
  return (
	  <div className="App">
		  <TodoMain header="금요일에 할일" form={<TodoInput/>}>
			  <TodoList/>
			<CompButton>나는 Children</CompButton>
		  </TodoMain>
	  <MyButton/>
	  <HomeButton/>
	  <CompButton click={() => alert("집에가자")}>우리집</CompButton>
	  <CompButton click={() => alert("서울가자")}>서울로</CompButton>
	  <CompButton click={() => alert("광주가자")}>광주로</CompButton>

	</div>
  );
};
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/*  TodoMain.jsx Layout을 사용하여 TODO 화면을 구현   */}
      <TodoMain header="금요일에 할일" form={<TodoInput />}>
        <TodoList />
      </TodoMain>

      <MyButton />
      <HomeButton />
      <CompButton onClick={() => alert("집에가자")}>우리집</CompButton>
      <CompButton>서울로</CompButton>
      <CompButton>제주로</CompButton>
      <CompButton>미국으로</CompButton>
      <CompButton>북극으로</CompButton>
    </div>
  );
}
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839

export default App;
