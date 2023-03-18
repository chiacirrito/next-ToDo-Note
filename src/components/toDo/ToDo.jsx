import { useContext } from "react";
import { useState } from "react";
import { ApplicationCtx } from "@/store";
import { MdDone } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import styles from "./index.module.scss";

const ToDo = ({ data }) => {
  const [isDone, setIsDone] = useState(false);
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleDelete = () => {
    dispatch({ type: "DELETE_ELEMENT", payload: data.id });
  };

  return (
    <div className={styles.ToDo}>
      <ul>
        <li id="icon" onClick={() => setIsDone((val) => !val)}>
          {isDone ? <MdDone /> : ""}
          {data.text}
        </li>
        <FiDelete className={styles.icon} onClick={onHandleDelete} />
      </ul>
    </div>
  );
};

export default ToDo;
