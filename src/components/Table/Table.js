import React from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { Chip, TableCell, Tooltip, Box } from "@mui/material";
import { countryCodeEmoji } from "country-code-emoji";
import LensIcon from "@mui/icons-material/Lens";
import InputSearch from "../InputSearch";
import matchSorter from "match-sorter";

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

export default function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: "siteId",
            asc: true
          }
        ]
      },
      filterTypes
    },
    useGlobalFilter,
    useSortBy
  );

  const getRowCellByType = (type, value) => {
    switch (type) {
      case "address":
        const flag = countryCodeEmoji(value ? value.toUpperCase() : ""); // returns '🇺🇸'
        return (
          <Tooltip title={value}>
            <Chip label={flag}></Chip>
          </Tooltip>
        );
      case "phone":
        return (
          <Tooltip title={value}>
            <Chip label="📞"></Chip>
          </Tooltip>
        );
      case "status":
        return (
          <Tooltip title={value} sx={{ paddingLeft: "10px" }}>
            {value === "active" ? (
              <LensIcon fontSize="10px" color="success" />
            ) : (
              <LensIcon fontSize="10px" color="error" />
            )}
          </Tooltip>
        );
      default:
        return <span>{value}</span>;
    }
  };

  return (
    <>
      <Box sx={{ float: "right" }}>
        <InputSearch
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </Box>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ▲" : " ▼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, idx) => {
                  return (
                    <TableCell key={idx}>
                      {getRowCellByType(cell.column.id, cell.value)}
                    </TableCell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
