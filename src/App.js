import { useContext, useState } from "react";
import { List } from "./Context";
import styles from "./App.module.css";
import { AllTab, ActiveTab, CompletedTab } from "./components/Tab";

function App() {
	const [task, setTask] = useState("");
	const [tab, setTab] = useState(1);

	const { todo, setTodo } = useContext(List);

	const handleSubmit = (e) => {
		e.preventDefault();
		const lastArrElementID = todo[todo.length - 1]?.id;
		if (task) {
			const newID = lastArrElementID + 1;
			const newTodoObj = {
				id: newID >= 1 ? newID : 1,
				task: task,
				checked: false,
			};
			setTodo([...todo, newTodoObj]);
			setTask("");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<h1>Task List</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Task'
						value={task}
						onChange={(e) => {
							setTask(e.target.value);
						}}
					/>
					<input type='submit' value='Add' />
				</form>
				<br />
				<div>
					<button onClick={() => setTab(1)}>All</button>
					<button onClick={() => setTab(2)}>Active</button>
					<button onClick={() => setTab(3)}>Completed</button>
				</div>
				<br />
				{tab === 1 && <AllTab />}
				{tab === 2 && <ActiveTab />}
				{tab === 3 && <CompletedTab />}
			</div>
		</div>
	);
}

export default App;
