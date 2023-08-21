import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/latest`;
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
          .filter((posts, index) => index < 5)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li key={post.id}>
                <Link to={`/latest/${post.id}`}>
                  <h3 className="headlines">{post.title.rendered}</h3>
                  <div className="news-info">
                    <span className="category">WORLD</span>
                    <span className="date">{post.date}</span>
                  </div>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default LatestNews;
