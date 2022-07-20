import { useContext, useState } from "react";
import { List } from "./Context";
import styles from "./App.module.css";
import { AllTab, ActiveTab, CompletedTab } from "./components/Tab";
import sally from "./assets/Saly-22.svg";
import Modal from "./components/modal/Modal";

function App() {
	const [task, setTask] = useState("");
	const [tab, setTab] = useState(1);
	const [err, setErr] = useState(false);

	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(true);
	};

	const { todo, setTodo } = useContext(List);

	function isBlank(str) {
		return !!!str || /^\s*$/.test(str); // Check for empty strings.
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const lastArrElementID = todo[todo.length - 1]?.id;
		if (!isBlank(task)) {
			setErr(false);
			const newID = lastArrElementID + 1;
			const newTodoObj = {
				id: newID >= 1 ? newID : 1,
				task: task,
				checked: false,
			};
			setTodo([...todo, newTodoObj]);
			setTask("");
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
					<div>
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
						<input id={styles.task_submit} type='submit' value='Add' />
					</div>
					{err ? <p>Fill Task Correct, Then Try again!!</p> : null}
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
				{tab === 1 && <AllTab />}
				{tab === 2 && <ActiveTab />}
				{tab === 3 && <CompletedTab />}
				<div className={styles.add_task} onClick={handleModal}>
					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M40 3.33331C19.75 3.33331 3.33331 19.75 3.33331 40C3.33331 60.25 19.75 76.6666 40 76.6666C60.25 76.6666 76.6666 60.25 76.6666 40C76.6666 19.75 60.25 3.33331 40 3.33331ZM43.3333 53.3333C43.3333 54.2174 42.9821 55.0652 42.357 55.6903C41.7319 56.3155 40.884 56.6666 40 56.6666C39.1159 56.6666 38.2681 56.3155 37.643 55.6903C37.0178 55.0652 36.6666 54.2174 36.6666 53.3333V43.3333H26.6666C25.7826 43.3333 24.9347 42.9821 24.3096 42.357C23.6845 41.7319 23.3333 40.884 23.3333 40C23.3333 39.1159 23.6845 38.2681 24.3096 37.643C24.9347 37.0178 25.7826 36.6666 26.6666 36.6666H36.6666V26.6666C36.6666 25.7826 37.0178 24.9347 37.643 24.3096C38.2681 23.6845 39.1159 23.3333 40 23.3333C40.884 23.3333 41.7319 23.6845 42.357 24.3096C42.9821 24.9347 43.3333 25.7826 43.3333 26.6666V36.6666H53.3333C54.2174 36.6666 55.0652 37.0178 55.6903 37.643C56.3155 38.2681 56.6666 39.1159 56.6666 40C56.6666 40.884 56.3155 41.7319 55.6903 42.357C55.0652 42.9821 54.2174 43.3333 53.3333 43.3333H43.3333V53.3333Z'
							fill='#0075FF'
						/>
					</svg>
				</div>
				{modal && <Modal setModal={setModal} />}
			</div>
		</div>
	);
}

export default App;
