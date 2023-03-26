import { useEffect } from "react";
import { useTodoDataContext, useTodoManagerContext } from "./contexts/Todo/hooks";
import { ListItem } from "./ListItem";

const List = () => {
  const todos = useTodoDataContext()
  const { addAllTodos } = useTodoManagerContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => addAllTodos(todos));
  }, [addAllTodos]);

  return (
    <ul>
      {todos.map((todo, idx) => (
        <ListItem key={todo.id + todo.title + idx} title={todo.title}/>
      ))}
    </ul>
  );
};

export { List };
