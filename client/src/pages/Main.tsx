
import React from "react"
import SideNavigation from "../components/SideNavigation/SIdeNavigation"
import Scroll from "./Scroll/Scroll"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="center" style={{}}>
        <Grid item sm={0} md={2} sx={{
          display: { xs: "none", sm: "none", md: "block" }
        }}
        // style={{ minWidth: "180px", maxWidth: "200px" }}
        >
          <SideNavigation />

        </Grid>
        <Grid item xs={12} sm={11} md={7} style={{ maxWidth: "697px" }}>
          <Scroll />

        </Grid>
        <Grid item sm={0} md={3} sx={{
          display: { xs: "none", sm: "none", md: "block" }
        }}>
          {/* rgb(255,255,255,0.7) */}
          <aside style={{
            background: "#282828", minHeight: "100vh", position: "fixed",
            width: "315px", paddingTop: "100px"
          }}>
            <span style={{ color: "white", fontSize: "30px" }}>
              Aside bar
            </span>
          </aside>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Main