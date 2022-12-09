import React from "react";
import Header from "./components/AppBar/AppBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";
import { Container, CssBaseline } from "@mui/material"

function App() {

  return (

    // rgb(246 248 250)
    // <div style={{ backgroundColor: "#282828" }}>
    <div>
      {/* // </div> */}
      <Header />
      <React.Fragment>
        <CssBaseline />
        {/* paddingLeft: "0", padding: "0 !important",  */}
        {/* backgroundColor: "#a3a3a3", */}
        <Container sx={{ maxWidth: "1244px !important", height: "100vh" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
