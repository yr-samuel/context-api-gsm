import { useTodoManagerContext } from "./contexts/Todo/hooks";

const OtherComponent = () => {
  useTodoManagerContext();
  console.log("ó");
  return null;
};

export { OtherComponent };
