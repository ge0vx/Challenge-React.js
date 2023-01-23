import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LogIn from "./pages/LogIn";

function App() {
  //theme definition
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0989e3",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
      secondary: {
        main: "#0989e3",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LogIn />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
