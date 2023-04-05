import React from "react";
import spencer from "./JoelHiltonHeadshot.jpg";
//Home page that is a default page with Joel's picture.
export const Home = () => (
  <div>
    <h1>Welcome to Spencer's Website</h1>
    <br></br>
    <img src={spencer} alt="Spencer"></img>
    <br></br>
    <h6>
      This is a website for Spencer to keep track of his Movies. Click the tabs
      above to see his stuff!
    </h6>
  </div>
);
