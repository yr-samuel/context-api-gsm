import { useContext } from "react"
import { TodoManagerContext } from "../ManagerContext"

const useTodoManagerContext = () => {
	const context = useContext(TodoManagerContext);
	if(!context) throw new Error("You're using it out of TodoManagerContext");

	return context;
}

export { useTodoManagerContext };