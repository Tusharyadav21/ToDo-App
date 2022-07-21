import React, { createContext, useState } from "react";

export const List = createContext();

const Context = ({ children }) => {
	const [todo, setTodo] = useState();

	return <List.Provider value={{ todo, setTodo }}>{children}</List.Provider>;
};

export default Context;
