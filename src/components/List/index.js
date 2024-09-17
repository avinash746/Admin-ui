import Card from "./Card";
import styles from "./styles.module.css";

function List({
  data,
  handleDelete,
  itemsToDelete,
  setSelectAll,
  selectAll,
  setSelectedRows,
  selectedRows,
  setFilteredData = () => {},
  setPaginationData,
}) {
  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
    if (!selectAll) setSelectedRows(new Set(data?.map((item) => item?.id)));
    else setSelectedRows(new Set());
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              name="check_all"
              checked={selectAll}
              onChange={handleSelectAll}
            />
          </th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody className={styles.list}>
        {(data || []).map((item, index) => (
          <Card
            key={item?.id}
            index={index}
            data={data}
            item={item}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            setSelectAll={setSelectAll}
            handleDelete={handleDelete}
            itemsToDelete={itemsToDelete}
            selectAll={selectAll}
            setFilteredData={setFilteredData}
            setPaginationData={setPaginationData}
          />
        ))}
      </tbody>
    </table>
  );
}

export default List;
