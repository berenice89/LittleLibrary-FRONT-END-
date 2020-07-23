import React from "react";
import BooksData from "./components/BooksData";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    margin: 20,
    spacing: 8,
    palette: {
      primary: {
        main: "#d81b60",
      },
      secondary: {
        main: "#9f3e72",
      },
    },

    // typography: {
    //   fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(
    //     ","
    //   ),
    // },
    typography: {
      h1: {
        fontSize: 70,
        margin: 20,
      },
      h2: {
        fontSize: 45,
        margin: 20,
      },
      fontFamily: "Arial",
      fontSize: 17,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BooksData />
      </ThemeProvider>
    </div>
  );
}

export default App;
