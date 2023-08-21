import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Trending = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/trending`;
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
          .filter((posts, index) => index < 3)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li className="side-feed" key={post.id}>
                <Link to={`/trending/${post.id}`}>
                  <div className="news">
                    <figure>
                      <img
                        src={post.better_featured_image.source_url}
                        className="thumb"
                        alt={post.id}
                      />
                    </figure>
                    <h3 className="feeds-headlines">{post.title.rendered}</h3>
                  </div>
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
export default Trending;
