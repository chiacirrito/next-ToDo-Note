import { GoChecklist } from "react-icons/go";
import { MdEditNote } from "react-icons/md";
import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <GoChecklist />
          <Link href={"/"}>To Do List</Link>
        </li>
        <li>
          <MdEditNote />
          <Link href={"/note"}>Note</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
