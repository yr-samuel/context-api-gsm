import { useMemo, useReducer } from "react";
import { IReducerAction, Todo } from "../ITodoContext";
import { todoReducer } from "../todoReducer";

const useData = (): [Todo[], React.Dispatch<IReducerAction>] => {
	const [todos, dispatch] = useReducer(todoReducer, []);
	return useMemo(() => [todos, dispatch], [todos]);
}

export { useData }