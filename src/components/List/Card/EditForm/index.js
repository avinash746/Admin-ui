import React, { useState } from "react";
import styles from "./styles.module.css";

function EditForm({
  index,
  item = {},
  setEdit = () => {},
  setFilteredData,
  setPaginationData,
}) {
  const [formData, setFormData] = useState({
    id: item?.id,
    name: item?.name,
    email: item?.email,
    role: item?.role,
  });

  const handleEditSave = () => {
    setFilteredData((prev) => [
      ...prev.map((itm) => (itm?.id === formData?.id ? formData : itm)),
    ]);
    setPaginationData((prev) => [
      ...prev.map((itm) => (itm?.id === formData?.id ? formData : itm)),
    ]);
    setEdit(false);
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.field}>
          <label for="id">ID</label>
          <input type="text" name="id" value={formData?.id} disabled />
        </div>
        <div className={styles.field}>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        <div className={styles.field}>
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData?.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className={styles.field}>
          <label for="role">Role</label>
          <input
            type="text"
            name="role"
            value={formData?.role}
            onChange={(e) => {
              setFormData({ ...formData, role: e.target.value });
            }}
          />
        </div>
      </form>
      <div className={styles.btn_wrapper}>
        <button
          type="button"
          onClick={() => {
            setEdit(false);
          }}
          className={styles.close_btn}
        >
          Close
        </button>
        <button
          type="button"
          onClick={handleEditSave}
          className={styles.save_btn}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditForm;
