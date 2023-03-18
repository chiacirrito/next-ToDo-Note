import { ApplicationCtx } from "@/store";
import { useContext, useState } from "react";
import styles from "./index.module.scss";

const AddToDo = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [text, setText] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_ELEMENT",
      payload: {
        id: Math.floor(Math.random() * 1000),
        text,
      },
    });
    setText(() => "");
  };
  return (
    <div className={styles.Add}>
      <form name="todo" onSubmit={onHandleSubmit}>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          placeholder="To Do..."
          onChange={(e) => setText(() => e.target.value)}
        />
        <input type="submit" value="Add Element" />
      </form>
    </div>
  );
};

export default AddToDo;
