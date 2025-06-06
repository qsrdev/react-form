import { useState } from "react";
import posts from "../data/posts.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="w-50 mx-auto">
          <h2>I miei post</h2>
          <ul className="list-group">
            {posts.map((curPost, index) => (
              <li key={index} className="list-group-item">
                {curPost.titolo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
