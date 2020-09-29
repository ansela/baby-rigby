import * as React from "react"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Divider,
} from "@material-ui/core"
import { BookError } from "./types"

interface AddBookErrorDialogProps {
  error: BookError | null
  onClose: () => void
}

const AddBookErrorDialog = ({ error, onClose }: AddBookErrorDialogProps) => {
  if (error === null) return null
  return (
    <Dialog open={error.error} onClose={onClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>
          There was an error adding the book, please try again later!
          <Divider />
          {Object.values(error.errors).map((val: string) => (
            <Typography variant="body1" color="error">
              {val}
            </Typography>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddBookErrorDialog
