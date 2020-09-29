import * as React from "react"
import Section from "./Section"
import {
  Typography,
  List,
  ListItemText,
  ListItem,
  Divider,
  CircularProgress,
} from "@material-ui/core"
import AddBookDialog from "./AddBookDialog"
import { addBookToList, getBooks } from "./service"
import { BabyBooksStatus, Book, BookError } from "./types"
import AddBookErrorDialog from "./AddBookErrorDialog"

const BabyBooks = () => {
  const [books, setBooks] = React.useState<Array<Book>>([])
  const [status, setStatus] = React.useState<BabyBooksStatus>(
    BabyBooksStatus.NONE
  )
  const [bookError, setBookError] = React.useState<BookError | null>(null)

  React.useEffect(() => {
    setStatus(BabyBooksStatus.PENDING)
    getBooks().then(
      (result) => {
        setBooks(result)
        setStatus(BabyBooksStatus.COMPLETE)
      },
      (error) => {
        setStatus(BabyBooksStatus.ERROR)
      }
    )
  }, [])

  const addBook = (book: Partial<Book>): void => {
    addBookToList(book).then(
      (result: Book | BookError) => {
        console.log("result of adding book", result)
        if ((result as BookError).error) {
          setBookError(result as BookError)
        } else {
          const newBooks = [...books, result as Book]
          setBooks(newBooks)
        }
      },
      (error) => {
        console.log("error adding book", error)
        setBookError(error)
      }
    )
  }

  if (status === BabyBooksStatus.PENDING)
    return (
      <Section header="Baby Books">
        <CircularProgress />
      </Section>
    )

  if (status === BabyBooksStatus.ERROR) {
    return (
      <Section header="Baby Books">
        <Typography variant="body1">
          There was an error loading the baby books, please try again later!
        </Typography>
      </Section>
    )
  }

  return (
    <>
      <Section header="Baby Books">
        <Typography variant="body1">
          Instead of registry gifts, Paige has asked for signed baby books to
          add to Baby Boy Rigby's collection. To keep track and avoid
          duplicates, we ask that you add your books to the list below. Thanks!
        </Typography>
        <Divider />
        <List>
          {books.length === 0 && (
            <Typography variant="h6">
              Be the first to add a book to the collection!
            </Typography>
          )}
          {books.map((book: Book) => (
            <ListItem key={book._id}>
              <ListItemText primary={book.title} secondary={book.name} />
            </ListItem>
          ))}
        </List>
        <AddBookDialog addBook={addBook} />
      </Section>
      <AddBookErrorDialog
        error={bookError}
        onClose={() => setBookError(null)}
      />
    </>
  )
}

export default BabyBooks
