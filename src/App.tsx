import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { blue, brown } from "@material-ui/core/colors"

import "./App.css"
import "fontsource-roboto"
import { Typography, responsiveFontSizes, Box } from "@material-ui/core"
import Header from "./Header"

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: brown,
  },
})
theme = responsiveFontSizes(theme)

interface SectionProps {
  children: any
}

const Section: React.SFC<SectionProps> = ({ children }) => (
  <Box component="section" m={3} position="relative">
    {children}
  </Box>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section>
        <Typography variant="h2" color="primary">
          Baby Shower
        </Typography>
      </Section>
      <Section>
        <Typography variant="h2" color="primary">
          Registry
        </Typography>
      </Section>
      <Section>
        <Typography variant="h2" color="primary">
          Guest Book
        </Typography>
      </Section>
    </ThemeProvider>
  )
}

export default App
