import React from "react";
import styles from "./styles.module.css";

function Pagination({
  handleNextPagination,
  handlePrevPagination,
  handleFirstPagination,
  handleLastPagination,
}) {
  return (
    <div>
      <button className={styles.pagination_btn1} type="button" onClick={handleFirstPagination}>
        First
      </button>
      <button className={styles.pagination_btn} type="button" onClick={handlePrevPagination}>
        Prev
      </button>
      <button className={styles.pagination_btn} type="button" onClick={handleNextPagination}>
        Next
      </button>
      <button className={styles.pagination_btn1} type="button" onClick={handleLastPagination}>
        Last
      </button>
    </div>
  );
}

export default Pagination;
