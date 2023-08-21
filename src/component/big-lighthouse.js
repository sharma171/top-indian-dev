import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BigLighthouse = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/national`;
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
              <li className="bg-lhs" key={post.id}>
                <Link to={`/national/${post.id}`}>
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      alt="{post.id}"
                      className="thumb"
                    />
                  </figure>
                  <div className="info">
                    <div className="news-info">
                      <span className="category">WORLD</span>
                      <span className="date">{post.date}</span>
                    </div>
                    <h3 className="lhs-text">{post.title.rendered}</h3>
                  </div>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default BigLighthouse;
