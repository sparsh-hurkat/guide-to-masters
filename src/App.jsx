import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme";
import Home from "./Home";
import MyStory from "./MyStory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-story" element={<MyStory />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
