import { useContext } from "react";
import { ApplicationCtx } from "@/store";
import Note from "../note/Note";
import styles from "./index.module.scss";

const NoteList = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.List}>
      {state.noteList.map((note) => (
        <Note data={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
