import { ApplicationCtx } from "@/store";
import { useContext } from "react";
import AddToDo from "../addToDo";
import ToDoList from "../toDoList";
import styles from "./index.module.scss";

const ToDoContent = () => {
  const { dispatch } = useContext(ApplicationCtx);

  return (
    <div className={styles.Content}>
      <AddToDo />
      <div className={styles.List}>
        <h2>Your To Do List</h2>
        <ToDoList />
      </div>
    </div>
  );
};

export default ToDoContent;
