import { useState, useContext } from "react";
import { ApplicationCtx } from "@/store";
import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(ApplicationCtx);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_NOTE",
      payload: {
        id: state.currentEditNote,
        title,
        content,
      },
    });
    dispatch({ type: "ON_HANDLE_MODAL" });
  };

  const onHandleClick = () => {
    dispatch({ type: "ON_HANDLE_MODAL" });
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHandleClick}></div>
      <form onSubmit={onHandleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />
        <input
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          type="text"
          className={styles.text}
          id="content"
          name="content"
          placeholder="Text"
        />
        <input type="submit" value="Edit Note" />
      </form>
    </div>
  );
};

export default Modal;
