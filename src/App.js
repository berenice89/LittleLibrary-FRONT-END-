import React from "react";
import BooksData from "./components/BooksData";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    margin: 20,
    spacing: 5,
    palette: {
      primary: {
        main: "#d81b60",
      },
      secondary: {
        main: "#9f3e72",
      },
    },
    go: {
      margin: "100px",
    },
  });

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BooksData />
      </ThemeProvider>
    </div>
  );
}

export default App;
