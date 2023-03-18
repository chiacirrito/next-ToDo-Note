import { ApplicationCtx } from "@/store";
import { useContext, useState } from "react";
import styles from "./index.module.scss";

const AddNote = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_NOTE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={styles.Add}>
      <form name="notes" id="one" onSubmit={onHandleSubmit}>
        <input
          className={styles.input}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(() => e.target.value)}
        />
        <input
          type="text"
          className={styles.text}
          id="content"
          name="content"
          value={content}
          required
          onChange={(e) => setContent(() => e.target.value)}
        />
        <input type="submit" value="Add Note" />
      </form>
    </div>
  );
};

export default AddNote;
