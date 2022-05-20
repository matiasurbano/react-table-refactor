import React from "react";
import Table from "../Table";
import PhoneIcon from "@mui/icons-material/Phone";
import makeData from "../../services/dataService";

export default function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Site Id",
        accessor: "siteId"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "Phone",
        accessor: "phone"
      },
      {
        Header: "Locales",
        accessor: "locales"
      },
      {
        Header: "PI name",
        accessor: "piName"
      },
      {
        Header: "PI-Phone",
        accessor: "piPhone"
      },
      {
        Header: "Default",
        accessor: "default"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "",
        accessor: "action"
      }
    ],
    []
  );
  // const data = React.useMemo(
  //   () => [
  //     { siteId: "123123", name: "MikeA", address: "StreetA 1234" },
  //     { siteId: "123125", name: "MikeB", address: "StreetB 1234" },
  //     { siteId: "123126", name: "MikeC", address: "StreetC 1234" },
  //     { siteId: "1231276", name: "MikeD", address: "StreetD 1234" }
  //   ],
  //   []
  // );

  const data = React.useMemo(() => makeData(5), []);

  return (
    <>
      <h1>ReactTable Refactor</h1>
      <PhoneIcon color="inherit" />
      <Table columns={columns} data={data} />
    </>
  );
}
