import { createContext, PropsWithChildren } from "react";
import { ITodoContext } from "./ITodoContext";

const TodoManagerContext = createContext<Omit<ITodoContext, 'todos'>>({} as Omit<ITodoContext, 'todos'>);

interface ManageProviderProps extends PropsWithChildren {
	managers: Omit<ITodoContext, 'todos'>
}

const ManagerProvider = (props: ManageProviderProps) => {
	return <TodoManagerContext.Provider value={props.managers} {...props} />
}

export { ManagerProvider, TodoManagerContext }