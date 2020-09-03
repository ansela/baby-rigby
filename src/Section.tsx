import * as React from "react"
import { Box, Typography, makeStyles, Paper } from "@material-ui/core"

interface SectionProps {
  children?: any
  header: string
}

const Section: React.SFC<SectionProps> = ({ children, header }) => (
  <Box component="section" m={3} position="relative">
    <SectionHeader>{header}</SectionHeader>
    <Paper>
      <Box p={3}>{children}</Box>
    </Paper>
  </Box>
)

interface SectionHeaderProps {
  children: any
}

const useSectionStyles = makeStyles({
  root: {
    backgroundImage:
      "linear-gradient(to left, rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.75),rgba(255, 255, 255, 0.0))",
  },
})

const SectionHeader: React.SFC<SectionHeaderProps> = ({ children }) => {
  const classes = useSectionStyles()
  return (
    <Box className={classes.root} p={2} my={2}>
      <Typography variant="h2" color="primary" align="center">
        {children}
      </Typography>
    </Box>
  )
}

export default Section
