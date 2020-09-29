export interface Book {
  name: string
  email: string
  title: string
  _id: string
}

export enum BabyBooksStatus {
  NONE,
  PENDING,
  COMPLETE,
  ERROR,
}

export interface BookError {
  error: boolean
  errors: object
}
