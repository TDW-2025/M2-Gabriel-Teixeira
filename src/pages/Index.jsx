import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Index.module.css";

function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Exercises TDW 👾</h1>

      <div className={styles.classList}>
        <Link to="/pageTodolist" className={styles.linkButton}>
          Class 07 <span className={styles.arrow}>→</span>
        </Link>

        <Link to="/pageTodolist2" className={styles.linkButton}>
          Class 08 <span className={styles.arrow}>→</span>
        </Link>

        <Link to="#" className={styles.linkButton}>
          Class 09 <span className={styles.arrow}>→</span>
        </Link>
      </div>

      <p className={styles.comingSoon}>Coming soon 🚧</p>
    </div>
  );
}

export default Index;
