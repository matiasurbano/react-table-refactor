import React from "react";
import Table from "../Table";
import PhoneIcon from "@mui/icons-material/Phone";

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
      }
    ],
    []
  );
  const data = React.useMemo(
    () => [
      { siteId: "123123", name: "MikeA", address: "StreetA 1234" },
      { siteId: "123125", name: "MikeB", address: "StreetB 1234" },
      { siteId: "123126", name: "MikeC", address: "StreetC 1234" },
      { siteId: "1231276", name: "MikeD", address: "StreetD 1234" }
    ],
    []
  );

  return (
    <>
      <h1>Using ReactTable</h1>
      <PhoneIcon color="inherit" />
      <Table columns={columns} data={data} />
    </>
  );
}
