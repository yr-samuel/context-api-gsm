import { useContext } from "react"
import { TodoDataContext } from "../TodoDataContext"

const useTodoDataContext = () => {
	const context = useContext(TodoDataContext);
	if(!context) throw new Error("You're using it out of TodoDataProvider");

	return context;
}

export { useTodoDataContext };