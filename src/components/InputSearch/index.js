import * as React from "react";
import Box from "@mui/material/Box";

import InputSearch from "./InputSearch";

export default function ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <InputSearch
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </Box>
  );
}
