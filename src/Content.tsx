import { Box, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary[50],
  },
}))

interface ContentProps {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps) => {
  const classes = useStyles()

  return <Box className={classes.root}>{children}</Box>
}

export default Content
