import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
      <h1 className={styles.logo}>Prasad Ankush Thorat</h1>
      <button className={styles.btn}>Click me!!</button>
    </div>
  );
};

export default Header;
