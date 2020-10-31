import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { blue, brown } from "@material-ui/core/colors"
import rigby from "./rigby.jpg"

import "./App.css"
import "fontsource-roboto"
import {
  Typography,
  responsiveFontSizes,
  Grid,
  Divider,
  Button,
  Box,
  Paper,
} from "@material-ui/core"
import Header from "./Header"
import Section from "./Section"
import BabyBooks from "./BabyBooks"
import Footer from "./Footer"
import Content from "./Content"

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: brown,
  },
  overrides: {
    MuiDivider: {
      root: {
        marginTop: "16px",
        marginBottom: "16px",
      },
    },
  },
})
theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <Box component="section" m={3} position="relative">
          <Paper>
            <img
              src={rigby}
              alt="Images of Baby Rigby reveal"
              style={{ width: "100%", height: "100%" }}
            />
          </Paper>
        </Box>
        <Section header="Baby Shower">
          <Typography
            variant="h4"
            color="secondary"
            align="center"
            gutterBottom
          >
            BABY RIGBY IS ON THE WAY AND WE COULD NOT BE MORE EXCITED!!
          </Typography>
          <Typography variant="body1" align="center">
            Thank you all who were able to attend, in person, virtually, or in
            spirit, to help celebrate with Paige and shower her with gifts!
          </Typography>
        </Section>
        <BabyBooks />
        <Section header="Registry">
          <Typography variant="body1">
            Paige and Sam are incredibly grateful for all the love and support
            they have received from friends and family. If you wish to
            contribute towards furnishing all the items a baby requires, please
            refer to one of the registries below.
          </Typography>
          <Divider />
          <Grid container spacing={3}>
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={() =>
                  window.open(
                    "https://www.target.com/gift-registry/giftgiver?registryId=18f6bd182d5346d4bf85f8ec28b74466&type=BABY",
                    "_blank"
                  )
                }
              >
                Target
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={() =>
                  window.open(
                    "https://www.amazon.com/baby-reg/paige-rigby-sam-rigby-december-2020-elizabethtown/3Q43S5YFBIHZV",
                    "_blank"
                  )
                }
              >
                Amazon
              </Button>
            </Grid>
          </Grid>
        </Section>
        {/* <Section header="Guest Book"></Section> */}
        <Footer />
      </Content>
    </ThemeProvider>
  )
}

export default App
