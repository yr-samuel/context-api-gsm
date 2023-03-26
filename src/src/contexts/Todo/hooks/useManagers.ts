import { useCallback, useMemo } from "react";
import { IReducerAction, Todo } from "../ITodoContext";

const useManagers = (dispatch: React.Dispatch<IReducerAction>) => {
	const addAllTodos = useCallback((todos: Todo[]) => {
    dispatch({
      type: "addAllTodos",
      payload: todos
    });
  }, []);

  const addTodoToList = useCallback((todo: Todo) => {
    dispatch({
      type: "addTodoToList",
      payload: todo
    });
  }, []);

  const removeTodoFromList = useCallback((todoId: string) => {
    dispatch({
      type: "removeTodoFromList",
      payload: todoId
    });
  }, []);

	return useMemo(() => ({
		addAllTodos,
		addTodoToList,
		removeTodoFromList
	}), [])
}

export { useManagers }

