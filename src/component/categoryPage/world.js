import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../global.css";
import ads from "../global-images/ads.png";
import RecentNews from "../Recentnews";

const WorldListing = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/world`;
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
      <div id="Category">
        <section className="category">
          <div className="container">
            <div className="row cat-page">
              <div className="cat-page-items col-md-9">
                <ul className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/world/" className="active">
                      International
                    </Link>
                  </li>
                </ul>
                <div className="tabhead">
                  <Link to="#">
                    <h2>International News</h2>
                  </Link>
                </div>
                <ul className="cat-items-list">
                  {posts &&
                    posts
                      .filter((posts, index) => index < 10)
                      .map((post) => {
                        console.log(post.title.rendered);
                        return (
                          <li key={post.id}>
                            <Link to={`/world/${post.id}`}>
                              <figure>
                                <img
                                  src={post.better_featured_image.source_url}
                                  alt={post.title.rendered}
                                  className="thumb"
                                />
                              </figure>
                              <div className="info">
                                <h3 className="headlines line-clamp-3">
                                  {post.title.rendered}
                                </h3>
                                <span>{post.date}</span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                </ul>
              </div>
              <div className="sidebar col-md-3">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Recent News</h2>
                  </Link>
                </div>
                <ul className="side-feed-list">
                  <RecentNews />
                  <div className="ads">
                    <img src={ads} alt="ads" srcSet />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default WorldListing;
