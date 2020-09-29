import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { blue, brown } from "@material-ui/core/colors"

import "./App.css"
import "fontsource-roboto"
import {
  Typography,
  responsiveFontSizes,
  Grid,
  Divider,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import Header from "./Header"
import Section from "./Section"
import BabyBooks from "./BabyBooks"
import Footer from "./Footer"

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

interface MomInfo {
  name: string
  email: string
}

const momsInfo: MomInfo[] = [
  {
    name: "Meg Norman",
    email: "mgnorman3.mn@gmail.com",
  },
  {
    name: "Lisa McKeever",
    email: "thyme2bloom@gmail.com",
  },
  {
    name: "Sarah Rigby",
    email: "sjrigby50@gmail.com",
  },
]

function App() {
  const sendEmail = (email: string): void => {
    window.open(`mailto:${email}?subject=Paige's Baby Shower`)
  }
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section header="Baby Shower">
        <Typography variant="h4" color="secondary" align="center" gutterBottom>
          BABY RIGBY IS ON THE WAY AND WE COULD NOT BE MORE EXCITED!!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          The Mothers and the Sisters, Nikki, Katie, Rachael, and Ashley, invite
          you to join us to celebrate with Paige
        </Typography>
        <Typography variant="h4" color="secondary" align="center">
          October 17th, 2020
        </Typography>
        <Typography variant="h5" color="secondary" align="center" gutterBottom>
          1:00 PM - 4:00 PM
        </Typography>
        <Grid container justify="center">
          <Button
            onClick={() => sendEmail("sjrigby50@gmail.com")}
            color="primary"
            size="large"
          >
            RSVP NOW
          </Button>
        </Grid>
        <Divider />
        <Typography variant="body1" align="center" gutterBottom>
          We are thrilled that extended family and friends will be joining us
          for the festivities via ZOOM
        </Typography>
        <Grid container justify="center">
          <Box py={3}>
            <Button variant="contained" color="primary" size="large">
              Join Zoom Now
            </Button>
          </Box>
        </Grid>
        <Divider />
        <Typography variant="h5" color="primary" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1">
          Please reach out with any questions to any of the moms, see contact
          info below
        </Typography>
        <List dense>
          {momsInfo.map(({ name, email }: MomInfo) => (
            <ListItem button key={name} onClick={() => sendEmail(email)}>
              <ListItemText primary={name} secondary={email} />
            </ListItem>
          ))}
        </List>
      </Section>
      <BabyBooks />
      <Section header="Registry">
        <Typography variant="body1">
          Paige and Sam are incredibly grateful for all the love and support
          they have received from friends and family. If you wish to contribute
          towards furnishing all the items a baby requires, please refer to one
          of the registries below.
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
      <Section header="Guest Book"></Section>
      <Footer />
    </ThemeProvider>
  )
}

export default App
