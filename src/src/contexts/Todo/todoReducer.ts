import { IReducerAction, Todo } from "./ITodoContext";

const todoReducer = (todos: Todo[], action: IReducerAction) => {
  switch (action.type) {
    case "addAllTodos": {
      return [...todos, ...action.payload];
    }
    case "addTodoToList": {
      return [...todos, action.payload];
    }
    case "removeTodoFromList": {
      const newTodoList = todos.filter((todo) => todo.id !== action.payload);
      return newTodoList;
    }
  }
};

export { todoReducer}