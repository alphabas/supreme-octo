import { Alert, Grid } from "@mui/material";
import "./App.css";
import HeaderComponent from "./components/header";
import MainCard from "./components/MainCard";
// import LinearIndeterminate from "./components/Loaders";
// import AddEditPersonModal from "./screens/person/AddEditPersonModal";
import { useEffect, useState } from "react";
import FormPersonal from "./screens/person/FormPersonal";
import axios from "axios";
import TableComponent from "./components/TableComponent";
import LinearDeterminate from "./components/LinearDeterminate";

function App() {
  useEffect(() => {
    setStartPage(true);
    setShow(false);
    setMessage(false);
    getUsers();
  }, []);

  const [users, setUsers] = useState({
    id: "",
    userName: "",
    dateOfBirth: null,
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startPage, setStartPage] = useState(false);

  const handleEdit = (data) => {
    console.log("=====<>", data);
    setShow(true);
    setUsers({ id: data._id, userName: data.userName });
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };

  const getUsers = () => {
    axios
      .get("http://localhost:8089/app/users")
      .then((data) => {
        setData(data.data);
        setStartPage(false);
        console.log("DATA=====<>", data);
      })
      .catch((err) => {
        console.log("ERR", err);
        setStartPage(false);
      });
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
          // backgroundColor: "#1d3354",
        }}
      >
        <Grid
          container
          spacing={1}
          style={{
            marginTop: 10,
            marginBottom: 15,
            // backgroundColor: "#1d3354",
          }}
        >
          {loading ? <LinearDeterminate /> : ""}
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
            users={users}
            setUsers={setUsers}
            getUsers={getUsers}
            setMessage={setMessage}
            setLoading={setLoading}
            handleClose={handleClose}
          />
        ) : (
          <TableComponent
            startPage={startPage}
            rows={data}
            handleEdit={handleEdit}
          />
        )}
      </MainCard>
    </div>
  );
}

export default App;
