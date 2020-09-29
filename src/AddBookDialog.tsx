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
import { Book } from "./types"

interface AddBookDialogProps {
  addBook: (book: Partial<Book>) => void
}

const AddBookDialog = ({ addBook }: AddBookDialogProps) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [title, setTitle] = React.useState<string>("")
  const [name, setName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")

  const handleOpen = () => {
    setOpen(true)
  }
  const handleSave = () => {
    const book: Partial<Book> = {
      title,
      name,
      email,
    }
    addBook(book)
    setTitle("")
    setName("")
    setEmail("")
    handleClose()
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="name"
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Your Email"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="Your email will not be displayed"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddBookDialog
