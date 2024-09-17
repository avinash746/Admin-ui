import React, { useState } from "react";
import styles from "./styles.module.css";
import EditForm from "./EditForm";
import editIcon from "./../../../assets/edit_icon.png";
import deleteIcon from "../../../assets/trash_icon.png";

function Card({
  item = {},
  index,
  selectedRows = new Set(),
  setSelectedRows = () => {},
  handleDelete = () => {},
  selectAll = false,
  setFilteredData,
  setPaginationData,
}) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <tr
        className={` ${styles.row} ${
          selectedRows.has(item?.id) ? styles.selected : null
        }`}
      >
        <td>
          <input
            type="checkbox"
            name="check"
            checked={selectedRows.has(item?.id) || selectAll}
            onChange={() => {
              if (selectedRows.has(item?.id)) selectedRows.delete(item?.id);
              else selectedRows.add(item?.id);
              setSelectedRows(new Set(selectedRows));
            }}
          />
        </td>
        <td>{item?.id}</td>
        <td>{item?.name}</td>
        <td>{item?.email}</td>
        <td>{item?.role}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              setEdit(true);
            }}
            className={styles.button}
          >
            <img src={editIcon} alt="" width={20} height={20} />
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              handleDelete(item?.id);
            }}
            className={styles.button}
          >
            <img src={deleteIcon} width={20} height={20} alt="" />
          </button>
        </td>
      </tr>
      {edit && (
        <EditForm
          index={index}
          setFilteredData={setFilteredData}
          item={item}
          setEdit={setEdit}
          setPaginationData={setPaginationData}
        />
      )}
    </>
  );
}

export default Card;
