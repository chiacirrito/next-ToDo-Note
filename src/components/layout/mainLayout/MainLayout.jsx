import Header from "@/components/header";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default MainLayout;
