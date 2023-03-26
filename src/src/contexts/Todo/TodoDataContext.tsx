import React, { createContext } from "react";
import { ITodoContext, } from "./ITodoContext";

interface TodoDataContextProviderProps extends React.PropsWithChildren {
	data: ITodoContext['todos']
}

const TodoDataContext = createContext<ITodoContext['todos']>({} as ITodoContext['todos']);

const DataProvider = (props: TodoDataContextProviderProps) =>  ( <TodoDataContext.Provider value={props.data} {...props} /> );

export { DataProvider, TodoDataContext };
