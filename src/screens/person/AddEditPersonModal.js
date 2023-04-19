import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonComponent from "../../components/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddEditPersonModal = ({ open, handleClose }) => {
  const [users, setUsers] = React.useState({
    name: "",
    dateOfBirth: null,
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUsers({ ...users, [name]: value });
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
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="dateOfBirth"
            label="Date of birthday"
            type="date"
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
            handleClick={handleClose}
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
