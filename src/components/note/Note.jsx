import { useContext } from "react";
import { ApplicationCtx } from "@/store";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import styles from "./index.module.scss";

const Note = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleEdit = () => {
    dispatch({ type: "ON_SET_CURRENT_EDIT_NOTE", payload: data.id });
    dispatch({ type: "ON_HANDLE_MODAL" });
  };

  const onHandleDelete = () => {
    dispatch({ type: "DELETE_NOTE", payload: data.id });
  };

  return (
    <div className={styles.Note}>
      <h3>{data.title}</h3>
      <p>{data.content}</p>
      <div className={styles.btn}>
        <button onClick={onHandleDelete}>
          <MdDelete />
        </button>
        <button onClick={onHandleEdit}>
          <GrEdit />
        </button>
      </div>
    </div>
  );
};

export default Note;
