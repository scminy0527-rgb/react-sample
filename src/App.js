import "./App.css";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
