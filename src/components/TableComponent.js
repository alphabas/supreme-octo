import * as React from "react";
import Table from "@mui/material/Table";
import { Stack } from "@mui/material";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonComponent from "./Button";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import moment from "moment/moment";

const TableComponent = ({ rows, handleEdit }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Date of birthday</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="center">
                {moment(row.dateOfBirth).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="center">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <ButtonComponent
                    handleClick={() => {
                      handleEdit(row);
                    }}
                    variant="contained"
                    size="small"
                    color="primary"
                    startIcon={<ModeEditIcon />}
                    style={{ paddingTop: "6px", paddingBottom: "6px" }}
                  />

                  <ButtonComponent
                    // handleClick={handleSave}
                    variant="contained"
                    size="small"
                    color="info"
                    startIcon={<EditCalendarIcon />}
                    style={{ paddingTop: "6px", paddingBottom: "6px" }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
