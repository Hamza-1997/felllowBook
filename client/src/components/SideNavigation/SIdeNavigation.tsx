import React from "react"

const SideNavigation = () => {
  return (
    <div style={{
      // rgb(246 248 250)
      // minWidth: "200px",
      backgroundColor: "#383838", maxWidth: "200px", width: "100%", minHeight: "100vh",
      color: "white", position: "fixed", paddingTop: "100px",
      // width: "200px"
    }}>
      {/* <h1> */}
      {/* SideNavigation */}
      <ul style={{ color: "white", listStyle: "none" }}>
        <li>Scroll</li>
        <li>Profile</li>
      </ul>
      {/* </h1> */}
    </div>
  )
}

export default SideNavigation