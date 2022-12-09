import { Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/AppBar/AppBar";

const Scroll = () => {

  const [postInput, setPostInput] = useState<string>("");
  const [posts, setPosts] = useState<string[]>([]);

  const handlePostCreated = () => {
    setPosts([...posts, postInput]);
    // setPostInput("")
  }
  console.log("postspostsposts", posts)

  return (
    <div
      // #e3e3e3
      style={{ minHeight: "100vh" }}>
      {/* <Header /> */}
      {/* rgb(246 248 250 */}
      <div style={{ padding: "1rem", height: "200px", flex: 1, paddingTop: "100px" }}>
        <form>
          <textarea style={{
            width: "100%",
            height: "150px",
            padding: "10px 10px",
            boxSizing: "border-box",
            border: "2px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f8f8f8",
            fontSize: "16px",
            resize: "none"
          }}
            placeholder="Some text..."
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
          >
            {/* <span style={{color:"black",position:"relative"}}>Write a post</span> */}
          </textarea>
        </form>
        <button onClick={handlePostCreated}>Done</button>
        {/* 697 * 327 */}

        {/* Posts goes here */}
        <>
          {posts.map((post) => {
            return (
              <div key={post} style={{ backgroundColor: "white", width: "100%", padding: "40px 24px", borderBottom: "1px solid grey" }}>

                <div>
                  {/* <Typography variant="h3">Username</Typography> */}
                  <Typography variant="body2" fontWeight="600" style={{ lineHeight: "10px" }}>Username</Typography>
                  <Typography variant="caption" color="grey">Shared a post</Typography>
                </div>

                <div>
                  <Typography variant="body1" color="grey">{post}</Typography>

                  {/* Images goes here  */}
                </div>

              </div>
            )
          })}
        </>
        {/* <div style={{ backgroundColor: "white", width: "100%", padding: "40px 24px" }}>

          <div>
            <Typography variant="body2" fontWeight="600" style={{ lineHeight: "10px" }}>Username</Typography>
            <Typography variant="caption" color="grey">Shared a post</Typography>
          </div>

          <div>
            <Typography variant="body1" color="grey">Actual post content</Typography>

          </div>

        </div> */}


      </div>
      {/* </div> */}
    </div>
  );
};

export default Scroll;