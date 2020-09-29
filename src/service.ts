import { Book } from "./types"

export const getBooks = async (): Promise<Array<Book>> => {
  const res = await fetch(`${process.env.REACT_APP_API}/books`)
  return await res.json()
}

export const addBookToList = async (book: Partial<Book>): Promise<Book> => {
  const res = await fetch(`${process.env.REACT_APP_API}/books`, {
    method: "POST",
    body: JSON.stringify(book),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  })
  return await res.json()
}
