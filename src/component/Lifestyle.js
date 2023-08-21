import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Lifestyle = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/photo/`;
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
                <Link to={`/photo/${post.id}`}>
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      alt={post.title.rendered}
                      className="thumb"
                    />
                  </figure>
                  <div className="info">
                    <h3 className="headlines">{post.title.rendered}</h3>
                  </div>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default Lifestyle;
