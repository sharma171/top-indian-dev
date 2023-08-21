import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NationalNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/national/`;
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
          .filter((posts, index) => index < 6)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li key={post.id}>
                <Link to={`/national/${post.id}`}>
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      className="thumb"
                      alt="single-image"
                    />
                  </figure>
                  <h3 className="news-headlines">{post.title.rendered}</h3>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default NationalNews;
