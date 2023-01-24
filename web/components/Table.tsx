import React from "react";
import { useNavigate } from "react-router-dom";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface TableProps {
  data: any[];
  columns: ColumnDef<any>[];
}

function Table({ data, columns }: TableProps) {
  const navigate = useNavigate();
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const saveItem = (item) => {
    console.log(item);
  };

  return (
    <Paper elevation={2} className="MuiTable">
      <MuiTable>
        <TableHead>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => {
                console.log("cell.id", cell.column.id);
                if (cell.column.id === "actions") {
                  return (
                    <TableCell key={cell.id}>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => saveItem(row.original)}
                      >
                        {" "}
                        star{" "}
                      </button>
                    </TableCell>
                  );
                }
                return (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Paper>
  );
}

export default Table;
