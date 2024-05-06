import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/ping")
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post, index) => (
        <div key={index}>
          {post.userId}
          {post.id}
          {post.title}
          {post.body}
        </div>
      ))}
    </div>
  );
}

export default App;
