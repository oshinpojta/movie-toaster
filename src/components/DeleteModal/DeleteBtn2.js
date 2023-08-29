import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/Delete';
import "./DeleteBtn.css"

export default function DeleteBtn2(props) {
  const [open, setOpen] = React.useState(false);

  const { _id, handleDelete } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDisagree = () => {
    setOpen(false);
  };

  const handleCloseAgree = () => {
    handleDelete(_id)
  }

  return (
    <div>
      <DeleteIcon fontSize='large' className='delete-icon' onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleCloseDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth="200px"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure You Want To Delete This ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}