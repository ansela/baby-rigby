import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { blue, brown } from "@material-ui/core/colors"

import "./App.css"
import "fontsource-roboto"
import {
  Typography,
  responsiveFontSizes,
  Box,
  makeStyles,
  Grid,
  Divider,
} from "@material-ui/core"
import Header from "./Header"
import Section from "./Section"
import BabyBooks from "./BabyBooks"

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: brown,
  },
})
theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section header="Baby Shower">
        <Typography variant="h3" color="secondary" align="center">
          October 17th, 2020
        </Typography>
        <Typography variant="h4" color="secondary" align="center">
          12:00 PM - 4:00 PM
        </Typography>
      </Section>
      <BabyBooks />
      <Section header="Registry">
        <Box mb={2}>
          <Typography variant="body1">
            Paige and Sam are incredibly grateful for all the love and support
            they have received from friends and family. If you wish to
            contribute towards furnishing all the items a baby requires, please
            refer to one of the registries below.
          </Typography>
        </Box>
        <Divider />
        <Box mt={2}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Typography variant="h3" color="secondary">
                Babies R Us
              </Typography>
              <Typography variant="body1">Info info blah blah</Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="h3" color="secondary">
                Another Location
              </Typography>{" "}
              <Typography variant="body1">Info info blah blah</Typography>
            </Grid>
          </Grid>
        </Box>
      </Section>
      <Section header="Guest Book"></Section>
    </ThemeProvider>
  )
}

export default App
