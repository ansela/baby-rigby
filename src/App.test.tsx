import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders header", () => {
  const { getByText } = render(<App />)
  const headerElement = getByText(/Baby Boy Rigby/i)
  expect(headerElement).toBeInTheDocument()
})
