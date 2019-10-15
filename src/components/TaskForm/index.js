import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
	Button,
} from '@material-ui/core';

class TaskForm extends Component {
  render() {
    const { openDialog, closeModal } = this.props;

    return (
      <Dialog open={openDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={closeModal} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default TaskForm;
