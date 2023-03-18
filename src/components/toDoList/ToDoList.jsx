import { useContext } from "react";
import { ApplicationCtx } from "@/store";
import ToDo from "../toDo/ToDo";
import styles from "./index.module.scss";

const ToDoList = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.List}>
      {state.ToDoList.map((todo) => (
        <ToDo data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ToDoList;
