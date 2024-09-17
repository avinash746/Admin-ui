import React from "react";
import Pagination from "./Pagination";
import DeleteAll from "./DeleteAll";
import styles from './styles.module.css';

function Footer({
  handleDeleteAll,
  handleNextPagination,
  handlePrevPagination,
  handleFirstPagination,
  handleLastPagination
}) {
  return (
    <footer className={styles.footer}>
      <DeleteAll handleDeleteAll={handleDeleteAll} />
      <Pagination
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
        handleFirstPagination={handleFirstPagination}
        handleLastPagination={handleLastPagination}
      />
    </footer>
  );
}

export default Footer;
