import { DataProvider } from "./TodoDataContext";
import { ManagerProvider } from "./ManagerContext";
import { PropsWithChildren } from "react";
import { useManagers, useData } from "./hooks";

interface TodoContextProviderProps extends PropsWithChildren { }

const TodoContextProvider = (props: TodoContextProviderProps) => {
	const [todos, dispatch] = useData();
	const managers = useManagers(dispatch);

	return (
		<DataProvider data={todos}>
			<ManagerProvider managers={managers} {...props}/>
		</DataProvider>
	)
}

export default TodoContextProvider