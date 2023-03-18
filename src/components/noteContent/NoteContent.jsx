import { ApplicationCtx } from "@/store";
import { useContext } from "react";
import AddNote from "../addNote";
import NoteList from "../noteList";
import styles from "./index.module.scss";

const NoteContent = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleSearch = (e) => {
    dispatch({ type: "ON_SEARCH_NOTE", payload: e.target.value });
  };

  return (
    <div className={styles.Content}>
      <AddNote />
      <div className={styles.title}>
        <h2>Your Notes</h2>
        <input
          onInput={onHandleSearch}
          type="text"
          id="search"
          name="search"
          placeholder="🔍Search..."
        />
        <NoteList />
      </div>
    </div>
  );
};

export default NoteContent;
