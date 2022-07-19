import React, { useContext } from "react";
import { List } from "../Context";
import styles from "../App.module.css";

export const AllTab = () => {
	const { todo, setTodo } = useContext(List);

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
	};

	return (
		<div>
			{todo
				.slice(0)
				.reverse()
				.map((el) => (
					<div key={el.id} className={styles.list_items}>
						<input type='checkbox' checked={el.checked} onChange={() => handleCheckboxChange(el)} />
						<h4>{el.task}</h4>
						<span onClick={() => handleRemoveTask(el)}>X</span>
					</div>
				))}
		</div>
	);
};

export const ActiveTab = () => {
	const { todo, setTodo } = useContext(List);

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
	};

	return (
		<div>
			{todo
				.filter((el) => el.checked === false)
				.map((el) => (
					<div key={el.id} className={styles.list_items}>
						<input type='checkbox' checked={el.checked} onChange={() => handleCheckboxChange(el)} />
						<h4>{el.task}</h4>
						<span onClick={() => handleRemoveTask(el)}>X</span>
					</div>
				))}
		</div>
	);
};

export const CompletedTab = () => {
	const { todo, setTodo } = useContext(List);

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
	};

	return (
		<div>
			{todo
				.filter((el) => el.checked === true)
				.map((el) => (
					<div key={el.id} className={styles.list_items}>
						<input type='checkbox' checked={el.checked} onChange={() => handleCheckboxChange(el)} />
						<h4>{el.task}</h4>
						<span onClick={() => handleRemoveTask(el)}>X</span>
					</div>
				))}
		</div>
	);
};
