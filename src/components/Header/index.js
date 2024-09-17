import React from "react";
import styles from "./styles.module.css";

function Header({ setQ }) {
  return (
    <header>
      <h1 className={styles.header}>Admin UI</h1>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Search by name, email or role"
        onChange={(e) => setQ(e.target.value)}
      />
    </header>
  );
}

export default Header;
