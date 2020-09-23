import * as React from "react"
import Section from "./Section"
import {
  Typography,
  List,
  ListItemText,
  ListItem,
  Divider,
  Button,
} from "@material-ui/core"
import AddBookDialog from "./AddBookDialog"

export interface BabyBooksProps {}

interface Book {
  title: string
  name: string
  email: string
}

const BabyBooks: React.SFC<BabyBooksProps> = () => {
  const [books, setBooks] = React.useState<Array<Book>>([])
  return (
    <Section header="Baby Books">
      <Typography variant="body1">
        Instead of registry gifts, Paige has asked for signed baby books to add
        to Baby Boy Rigby's collection. To keep track and avoid duplicates, we
        ask that you add your books to the list below. Thanks!
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Is your mama a llama?" secondary="Ashley N." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Baby book" secondary="Taylor Swift" />
        </ListItem>
      </List>
      <AddBookDialog />
    </Section>
  )
}

export default BabyBooks
