import React, { useContext, useEffect, useState } from "react";
import { List } from "./Context";
import { AllTab, ActiveTab, CompletedTab } from "./components/Tab";
import Modal from "./components/modal/Modal";
import styles from "./App.module.css";

import sally from "./assets/Saly-22.svg";

function App() {
	const [task, setTask] = useState("");
	const [tab, setTab] = useState(1);
	const [err, setErr] = useState(false);

	const { todo, setTodo, modal, setModal, isBlank } = useContext(List);

	useEffect(() => {
		const Arr = localStorage.getItem("todos");
		const parsedArr = JSON.parse(Arr);
		setTodo(parsedArr);
		// console.log(parsedArr);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = (e) => {
		setTask(task.trim());
		e.preventDefault();
		const lastArrElementID = todo !== null ? todo[todo?.length - 1]?.id : 1;
		if (!isBlank(task)) {
			setErr(false);
			const newID = lastArrElementID + 1;
			const newTodoObj = {
				id: newID >= 1 ? newID : 1,
				task: task,
				checked: false,
			};
			const newArr = todo !== null ? [...todo, newTodoObj] : [newTodoObj];
			setTodo(newArr);
			setTask("");
			localStorage.setItem("todos", JSON.stringify(newArr));
		} else {
			setErr(true);
		}
	};

	return (
		<div className={styles.container}>
			<img src={sally} alt='Sally' />
			<div className={styles.body}>
				<h1>Task List</h1>
				<form onSubmit={handleSubmit}>
					<input
						className={`${err ? styles.error : ""}`}
						id={styles.task_input}
						type='text'
						placeholder='Task'
						value={task}
						onChange={(e) => {
							setTask(e.target.value);
						}}
					/>
					{err ? <p>Fill Task Correctly..!!</p> : null}
					<input id={styles.task_submit} type='submit' value='Add' />
				</form>
				<br />
				<div>
					<button className={`${tab === 1 ? styles.active : ""}`} onClick={() => setTab(1)}>
						All
					</button>
					<button className={`${tab === 2 ? styles.active : ""}`} onClick={() => setTab(2)}>
						Active
					</button>
					<button className={`${tab === 3 ? styles.active : ""}`} onClick={() => setTab(3)}>
						Completed
					</button>
				</div>
				<br />
				{tab === 1 && <AllTab todo={todo} setTodo={setTodo} />}
				{tab === 2 && <ActiveTab />}
				{tab === 3 && <CompletedTab />}
				{modal && <Modal setModal={setModal} />}
			</div>
		</div>
	);
}

export default App;
