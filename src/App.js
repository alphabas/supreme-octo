import { Alert, Grid } from "@mui/material";
import "./App.css";
import HeaderComponent from "./components/header";
import MainCard from "./components/MainCard";
// import LinearIndeterminate from "./components/Loaders";
import AddEditPersonModal from "./screens/person/AddEditPersonModal";
import { useEffect, useState } from "react";
import FormPersonal from "./screens/person/FormPersonal";

function App() {
  useEffect(() => {
    setShow(false);
    setMessage(false);
  }, []);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setShow(false);
    // setMessage(false);
  };

  const handleShows = () => {
    setShow(true);
    setMessage(false);
  };

  const handleHide = () => {
    setShow(false);
    setMessage(false);
  };

  return (
    <div className="App" style={{ backgroundColor: "#1d3354" }}>
      <HeaderComponent
        show={show}
        setShow={setShow}
        handleShows={handleShows}
        handleHide={handleHide}
      />

      <MainCard
        sx={{
          borderRadius: "0px",
          marginTop: "15px",
          marginBottom: 5,
          border: "1px solid white",
          backgroundColor: "#1d3354",
        }}
      >
        <Grid
          container
          spacing={1}
          style={{
            marginTop: 10,
            marginBottom: 15,
            backgroundColor: "#1d3354",
          }}
        >
          {/* <LinearIndeterminate /> */}
          {/* <TableComponent /> */}
          <Grid md="12" xs="12">
            {message ? (
              <Alert severity="success">
                Personnel Enregistrer avec success!
              </Alert>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        {show ? (
          <FormPersonal
            open={open}
            setMessage={setMessage}
            handleClose={handleClose}
          />
        ) : (
          ""
        )}
      </MainCard>

      <AddEditPersonModal
        open={open}
        setMessage={setMessage}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
