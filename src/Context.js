import React, { createContext, useState } from "react";

export const List = createContext();

const Context = ({ children }) => {
	const [todo, setTodo] = useState([
		{
			id: 1,
			task: "Here will be your Completed task!!",
			checked: true,
		},
		{
			id: 2,
			task: "Here will be your Active Task!!",
			checked: false,
		},
		{
			id: 3,
			task: "Here will be your task!!",
			checked: false,
		},
	]);

	return <List.Provider value={{ todo, setTodo }}>{children}</List.Provider>;
};

export default Context;
