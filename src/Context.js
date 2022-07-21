import React, { createContext, useState } from "react";

export const List = createContext();

const Context = ({ children }) => {
	const [todo, setTodo] = useState();

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

	return (
		<List.Provider
			value={{
				todo,
				setTodo,
				handleCheckboxChange: handleCheckboxChange,
				handleRemoveTask: handleRemoveTask,
			}}
		>
			{children}
		</List.Provider>
	);
};

export default Context;
