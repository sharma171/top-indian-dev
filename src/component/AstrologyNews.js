import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Astrology = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/technology/`;
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
              <li className="side-feed" key={post.id}>
                <Link to={`/technology/${post.id}`}>
                  <div className="news">
                    <figure>
                      <img
                        src={post.better_featured_image.source_url}
                        className="thumb"
                        alt={post.title.rendered}
                      />
                    </figure>
                    <h3 className="feeds-headlines">{post.title.rendered}</h3>
                  </div>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default Astrology;
