import React, { createContext, useState } from "react";

export const List = createContext();

const Context = ({ children }) => {
	const [todo, setTodo] = useState();
	const [modal, setModal] = useState();
	const [modalData, setModalData] = useState();

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
		localStorage.setItem("todos", JSON.stringify([...todo]));
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
		localStorage.setItem("todos", JSON.stringify(filteredTodo));
	};

	function isBlank(str) {
		return !!!str || /^\s*$/.test(str); // Check for empty strings.
	}

	return (
		<List.Provider
			value={{
				todo,
				setTodo,
				modal,
				setModal,
				modalData,
				setModalData,
				handleCheckboxChange: handleCheckboxChange,
				handleRemoveTask: handleRemoveTask,
				isBlank: isBlank,
			}}
		>
			{children}
		</List.Provider>
	);
};

export default Context;
