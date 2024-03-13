import { useEffect, useState } from "react";
import { fetch } from "cross-fetch";
const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data = await res.json();

      setPosts(data);
    };

    fetchdata();
  }, []);
  return (
    <div>
      post data
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
