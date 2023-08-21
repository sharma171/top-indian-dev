import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LiveUpdates = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/liveupdates/`;
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [1]);
  console.log("posts", posts);
  return (
    <>
      {posts &&
        posts
          .filter((posts, index) => index < 2)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li key={post.id}>
                <Link to="/detailed">
                  <h3 className="headlines">{post.title.rendered}</h3>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default LiveUpdates;
