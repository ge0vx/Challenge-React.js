import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { routes as appRoutes } from "./utils/routes";
import { StoreProvider } from "./store/StoreContext";

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
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
