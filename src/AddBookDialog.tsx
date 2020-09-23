import * as React from "react"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core"

export interface AddBookDialogProps {}

const AddBookDialog: React.SFC<AddBookDialogProps> = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add a Book
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Have you gotten another book that isn't on the list? Add it below so
            we don't get duplicates!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Book Title"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="name"
            label="Your Name"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Your Email"
            fullWidth
            type="email"
            helperText="Your email will not be displayed"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} color="primary">
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddBookDialog
