export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface ITodoContext {
    todos: Todo[];
    addAllTodos: (todos: Todo[]) => void;
    addTodoToList: (todo: Todo) => void;
    removeTodoFromList: (todoId: string) => void;
  }
  
  type TReducerType = "addAllTodos" | "addTodoToList" | "removeTodoFromList";
  
  export interface IReducerAction {
    type: TReducerType;
    payload: any;
  }
  