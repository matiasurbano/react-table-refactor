import React from "react";
import Table from "../Table";
import makeData from "../../services/dataService";

export default function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Site Id",
        accessor: "siteId",
        disableSortBy: false
      },
      {
        Header: "Name",
        accessor: "name",
        disableSortBy: false
      },
      {
        Header: "Address",
        accessor: "address",
        disableSortBy: true
      },
      {
        Header: "Phone",
        accessor: "phone",
        disableSortBy: true
      },
      {
        Header: "Locales",
        accessor: "locales",
        disableSortBy: false
      },
      {
        Header: "PI name",
        accessor: "piName",
        disableSortBy: true
      },
      {
        Header: "PI-Phone",
        accessor: "piPhone",
        disableSortBy: true
      },
      {
        Header: "Default",
        accessor: "default",
        disableSortBy: true
      },
      {
        Header: "Status",
        accessor: "status",
        disableSortBy: false
      },
      {
        Header: "",
        accessor: "action",
        disableSortBy: true
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <>
      <h1>ReactTable Refactor</h1>
      <Table columns={columns} data={data} />
    </>
  );
}
