import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  ButtonGroup,
  Button,
  useMediaQuery,
  Link,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { useTheme } from "@material-ui/core/styles"
import React, { useState } from "react"
import { Document, Outline, Page } from "react-pdf"

//@ts-ignore
import { makeStyles } from "@material-ui/styles"

const PDF = "https://rigby-baby.s3.amazonaws.com/shower-games.pdf"

const useStyle = makeStyles({
  accordion: {
    flexDirection: "column",
    alignItems: "center",
  },
})

const Games = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [numPages, setNumPages] = useState<number | null>(null)
  const classes = useStyle()
  const theme = useTheme()
  const xxs = useMediaQuery("(max-width:280px)")
  const xs = useMediaQuery("(max-width:320px)")
  const medium = useMediaQuery(theme.breakpoints.between("sm", "md"))
  const large = useMediaQuery(theme.breakpoints.up("md"))

  const getPageWidth = (): number => {
    if (xxs) return 200
    if (xs) return 250
    if (medium) return 600
    if (large) return 1000

    return 300
  }

  const onDocumentLoadSuccess = ({ numPages: np }: { numPages: number }) => {
    setNumPages(np)
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  const prevPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  const onItemClicked = ({
    pageNumber: itemPageNumber,
  }: {
    pageNumber: string
  }): void => {
    setPageNumber(parseInt(itemPageNumber))
  }

  return (
    <Box mx={-3} mb={-3} mt={-1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="games-content"
          id="games-header"
        >
          <Typography variant="h5" color="primary" gutterBottom>
            Games
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion}>
          <Typography align="center">
            No baby shower would be complete without a few games! Feel free to
            follow along below, or{" "}
            <Link href={PDF} target="_blank">
              download
            </Link>{" "}
            and print instead. We will go through them together throughout the
            shower!
          </Typography>
          <Document
            file={PDF}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error("Load Error")
              console.error(error)
            }}
          >
            <Outline onItemClick={onItemClicked} />
            <Page pageNumber={pageNumber || 1} width={getPageWidth()} />
          </Document>
          <Typography color="secondary">
            Page {pageNumber} of {numPages}
          </Typography>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="pdf navigation button group"
          >
            <Button onClick={prevPage} disabled={pageNumber === 1}>
              Prev Page
            </Button>
            <Button onClick={nextPage} disabled={pageNumber === numPages}>
              Next Page
            </Button>
          </ButtonGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Games
