import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import clsx from "clsx"

export interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  height: {
    height: "100%",
  },
  triangles: {
    width: "50%",
    height: "100%",
  },
  leftTri: {
    clipPath: "polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)",
    shapeOutside: "polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)",
    backgroundColor: theme.palette.primary.light,
    float: "left",
  },
  rightTri: {
    clipPath: "polygon(100% 0, 0% 50%, 0% 100%, 100% 100%)",
    shapeOutside: "polygon(100% 0, 0% 50%, 0% 100%, 100% 100%)",
    backgroundColor: theme.palette.primary.dark,
    float: "right",
  },
  overlayTri: {
    position: "absolute",
    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    height: "100%",
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  headings: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  transition: {
    height: "100vh",
    width: "100%",
    position: "absolute",
    backgroundImage: `linear-gradient(${theme.palette.primary.light}, white)`,
  },
}))

const Header: React.SFC<HeaderProps> = () => {
  const classes = useStyles()
  return (
    <>
      <Box component="header" className={classes.height} position="relative">
        <div className={clsx(classes.triangles, classes.rightTri)} />
        <div className={clsx(classes.triangles, classes.leftTri)} />
        <div className={classes.overlayTri} />

        <Box className={classes.text}>
          <Box className={classes.headings} p={1}>
            <Typography variant="h1" color="primary" align="center">
              Baby Boy Rigby
            </Typography>
            <Typography variant="h2" color="secondary" align="center">
              Due December 2020
            </Typography>
          </Box>
        </Box>
      </Box>

      <div className={classes.transition} />
    </>
  )
}

export default Header
