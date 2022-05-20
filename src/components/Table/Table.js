import { useTable, useSortBy } from "react-table";
import { Chip, TableCell, Tooltip } from "@mui/material";
import { countryCodeEmoji } from "country-code-emoji";
import LensIcon from "@mui/icons-material/Lens";

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
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
      }
    },
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
