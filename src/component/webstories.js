import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import storyIcon from "./global-images/web-stories-icon.svg";

const WebStories = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/webstories/`;
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
          .filter((posts, index) => index < 4)
          .map((post) => {
            console.log(post.title.rendered);
            return (
              <li key={post.id}>
                <Link to="/detailed">
                  <figure>
                    <img
                      src={post.better_featured_image.source_url}
                      alt="{post.id}"
                      className="thumb"
                    />
                  </figure>
                  <div className="info">
                    <div className="story-icon">
                      <img src={storyIcon} alt="web-stories" className="icon" />
                    </div>
                    <div className="headlines">
                      <h3>{post.title.rendered}</h3>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
    </>
  );
};
export default WebStories;
