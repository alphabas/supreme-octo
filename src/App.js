import { Grid, Stack } from "@mui/material";
import "./App.css";
import HeaderComponent from "./components/header";
import MainCard from "./components/MainCard";
// import LinearIndeterminate from "./components/Loaders";
import TableComponent from "./components/TableComponent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ButtonComponent from "./components/Button";
import AddEditPersonModal from "./screens/person/AddEditPersonModal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleCreateEdit = () => {
    setOpen(true);
  };

  const handleCloseCreateEdit = () => {
    setOpen(false);
  };

  return (
    <div className="App" style={{ backgroundColor: "#E7EFFF" }}>
      <HeaderComponent />

      <MainCard
        sx={{
          borderRadius: "0px",
          marginTop: "15px",
          marginBottom: 5,
          border: "1px solid white",
        }}
      >
        <Stack direction="row" justifyContent="end">
          <div>
            <ButtonComponent
              handleClick={handleCreateEdit}
              variant="contained"
              size="small"
              color="info"
              startIcon={<AddCircleIcon />}
              style={{ paddingTop: "6px", paddingBottom: "6px" }}
              text={"AJOUTER USER"}
            />
          </div>
        </Stack>
      </MainCard>

      <MainCard
        sx={{
          border: "1px solid white",
          marginTop: "4px",
          marginBottom: "4px",
        }}
      >
        <Grid container spacing={1} style={{ marginTop: 10, marginBottom: 15 }}>
          {/* <LinearIndeterminate /> */}
          <TableComponent />
        </Grid>
      </MainCard>

      <AddEditPersonModal open={open} handleClose={handleCloseCreateEdit} />
    </div>
  );
}

export default App;
