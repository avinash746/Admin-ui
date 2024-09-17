import React from "react";
import styles from './styles.module.css';

function DeleteAll({ handleDeleteAll }) {
  return (
    <button className={styles.delete_all_btn} type="button" onClick={handleDeleteAll}>
      Delete Selected
    </button>
  );
}

export default DeleteAll;
