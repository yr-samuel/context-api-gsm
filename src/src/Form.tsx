import { useState } from "react";
import { useTodoManagerContext } from "./contexts/Todo/hooks/"

const Form = () => {
  const { addTodoToList } = useTodoManagerContext();
  const [todo, setTodo] = useState("");

  console.log("iha");

  const addTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({ title: todo })
    })
      .then((response) => response.json())
      .then((response) => {
        const newTodo = {
          id: response.id,
          title: todo,
          completed: false
        };

        addTodoToList(newTodo);
      });
  };

  return (
    <div style={{ position: "sticky", top: 0 }}>
      <form action="">
        <label htmlFor="">
          O que é para fazer?
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </label>
      </form>
      <button onClick={addTodo}>Adicionar tarefa</button>
    </div>
  );
};

export { Form };
