import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ButtonComponent from "../../components/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { Alert, Typography } from "@mui/material";

const FormPersonal = ({
  open,
  users,
  setUsers,
  getUsers,
  setLoading,
  setMessage,
  handleClose,
}) => {
  const [ErrorUsername, setErrorUsername] = useState(false);
  const [ErrorDate, setErrorDate] = useState(false);

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUsers({ ...users, [name]: value });
  };

  const handleSave = () => {
    setLoading(true);
    if (users.userName === "") {
      setErrorUsername(true);
    }

    if (users.dateOfBirth === null) {
      setErrorDate(true);
    }

    if (!ErrorDate || !ErrorUsername) {
      const registered = {
        userName: users.userName,
        dateOfBirth: users.dateOfBirth,
      };

      axios
        .post("http://localhost:8089/app/users", registered)
        .then((response) => {
          console.log("=======<>", response.data);
          setMessage(true);
          setUsers({
            userName: "",
            dateOfBirth: "",
          });
          getUsers();
          handleClose();
          setLoading(false);
        })
        .catch((error) => {
          setMessage(false);
          console.log("====<>", error);
          setLoading(false);
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <DialogContent style={{ backgroundColor: "#c3d9fc", fontWeight: "bold" }}>
        <Typography> ADD PERSON</Typography>
        {ErrorUsername ? <Alert severity="error">Missing name!</Alert> : ""}

        {ErrorDate ? <Alert severity="error">Missing date!</Alert> : ""}

        <TextField
          autoFocus
          margin="dense"
          id="userName"
          label="Name"
          name="userName"
          value={users.userName}
          onChange={handleInputs}
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="dateOfBirth"
          name="dateOfBirth"
          label="Date of birthday"
          type="date"
          value={users.dateOfBirth}
          onChange={handleInputs}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <ButtonComponent
          handleClick={handleClose}
          variant="contained"
          size="small"
          color="error"
          startIcon={<CancelIcon />}
          style={{ paddingTop: "6px", paddingBottom: "6px" }}
          text={"CANCEL"}
        />

        <ButtonComponent
          handleClick={handleSave}
          variant="contained"
          size="small"
          color="info"
          startIcon={<SaveIcon />}
          style={{ paddingTop: "6px", paddingBottom: "6px" }}
          text={"SAVE"}
        />
      </DialogActions>
    </div>
  );
};

export default FormPersonal;
