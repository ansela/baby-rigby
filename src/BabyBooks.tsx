import * as React from "react"
import Section from "./Section"
import { Typography, Divider } from "@material-ui/core"

const BabyBooks = () => {
  return (
    <>
      <Section header="Baby Books">
        <Typography variant="body1">
          Instead of cards, Paige has requested baby books to add to Baby Boy
          Rigby's collection. There are books to choose from on the registry or
          maybe you have a childhood favorite? We are asking that you write a
          personal note to Baby Rigby inside the book as well. Your note to Baby
          will be cherished for years to come!
        </Typography>
        <Divider />
        <Typography variant="body1" align="center">
          Thank you all who added their books to the list. Paige recieved many
          unique books to fill Baby Boy Rigby's baby book collections{" "}
          <span role="img" aria-label="book emoji">
            📖
          </span>
        </Typography>
      </Section>
    </>
  )
}

export default BabyBooks
