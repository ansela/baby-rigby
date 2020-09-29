import {
  Box,
  Grid,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary[100],
    // color: theme.palette.primary.contrastText,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Box p={3}>
          <Typography variant="body2">
            Having problems with the website? Contact{" "}
            <Link href="mailto:ashley.ansell@gmail.com?subject=I am having an issue with Paige Rigby baby shower website">
              Ashley
            </Link>{" "}
            for help
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
