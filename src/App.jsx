import { useState } from "react";
import posts from "../data/posts.js";
import "./App.css";

function App() {
  const [newPost, setNewPost] = useState("");
  const [postList, setPostList] = useState(posts);

  const handleNewPost = (event) => {
    event.preventDefault();
    posts.push(newPost);
    setPostList([newPost, ...postList]);
    console.log(postList);
  };

  return (
    <>
      <div className="container">
        <div className="w-50 mx-auto">
          <h2 className="text-center">I miei post</h2>

          <form onSubmit={handleNewPost} className="d-flex my-5">
            <input value={newPost} onChange={(event) => setNewPost(event.target.value)} autoComplete="off" className="form-control" type="text" aria-label="Aggiungi un nuovo articolo" />
            <button className="btn btn-success mx-2">+</button>
          </form>

          <ul className="list-group">
            {postList.map((curPost, index) => (
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
