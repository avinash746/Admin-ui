import React, { useEffect, useState } from "react";
import Header from "../Header";
import List from "../List";
import Footer from "../Footer";

function Admin() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [paginationData, setPaginationData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const itemsToDelete = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          setFilteredData(jsonData);
          setPaginationData(jsonData.slice(0, 10)); // Initialize paginationData
        } else {
          console.error("Fetch failed:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (query) => {
    setQ(query);
    const filteredItems = data.filter(
      (item) =>
        item?.name.toLowerCase().includes(query.toLowerCase()) ||
        item?.role.toLowerCase().includes(query.toLowerCase()) ||
        item?.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredItems);
    setPaginationData(filteredItems.slice(0, 10)); // Update paginationData
    setStartIndex(0); // Reset startIndex
    setEndIndex(10); // Reset endIndex
  };

  const handleDelete = (itemId) => {
    const updatedData = filteredData.filter((item) => item.id !== itemId);
    setFilteredData(updatedData);
    setPaginationData(updatedData.slice(startIndex, endIndex)); // Update paginationData
  };

  const handleDeleteAll = () => {
    const updatedData = filteredData.filter((item) => {
      return !selectedRows?.has(item?.id);
    });
    setFilteredData(updatedData);
    setSelectedRows(new Set());
    setSelectAll(false);
    setPaginationData(updatedData.slice(startIndex, endIndex)); // Update paginationData
  };

  const handleNextPagination = () => {
    if (endIndex < Math.floor(filteredData?.length)) {
      setStartIndex(startIndex + 10);
      setEndIndex(endIndex + 10);
      setPaginationData(filteredData.slice(startIndex + 10, endIndex + 10)); // Update paginationData
    }
  };

  const handlePrevPagination = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
      setPaginationData(filteredData.slice(startIndex - 10, endIndex - 10)); // Update paginationData
    }
  };

  const handleLastPagination = () => {
    setStartIndex(Math.floor(filteredData?.length) - 10);
    setEndIndex(Math.floor(filteredData?.length));
    setPaginationData(
      filteredData.slice(
        Math.floor(filteredData?.length) - 10,
        Math.floor(filteredData?.length)
      )
    ); // Update paginationData
  };

  const handleFirstPagination = () => {
    setStartIndex(0);
    setEndIndex(10);
    setPaginationData(filteredData.slice(0, 10)); // Update paginationData
  };

  return (
    <>
      <Header setQ={handleFilter} q={q}></Header>
      <List
        data={paginationData} // Use paginationData instead of filteredData
        handleDelete={handleDelete}
        itemsToDelete={itemsToDelete}
        selectedRows={selectedRows}
        selectAll={selectAll}
        setSelectedRows={setSelectedRows}
        setSelectAll={setSelectAll}
        setFilteredData={setFilteredData}
        setPaginationData={setPaginationData}
      />
      <Footer
        handleDeleteAll={handleDeleteAll}
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
        handleLastPagination={handleLastPagination}
        handleFirstPagination={handleFirstPagination}
      />
    </>
  );
}

export default Admin;
