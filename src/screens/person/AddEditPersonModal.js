import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonComponent from "../../components/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { Slide } from "@mui/material";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddEditPersonModal = ({ open, setMessage, handleClose }) => {
  const [users, setUsers] = useState({
    userName: "",
    dateOfBirth: null,
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUsers({ ...users, [name]: value });
  };

  const handleSave = () => {
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
        handleClose();
      })
      .catch((error) => {
        setMessage(false);
        console.log("====<>", error);
      });
  };

  return (
    <div>
      <Dialog
        open={open}
        fullWidth={"lg"}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Creer un personnel</DialogTitle>
        <DialogContent>
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
            color="info"
            startIcon={<CancelIcon />}
            style={{ paddingTop: "6px", paddingBottom: "6px" }}
            text={"Annuler"}
          />

          <ButtonComponent
            handleClick={handleSave}
            variant="contained"
            size="small"
            color="info"
            startIcon={<SaveIcon />}
            style={{ paddingTop: "6px", paddingBottom: "6px" }}
            text={"Enregistrer"}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddEditPersonModal;
