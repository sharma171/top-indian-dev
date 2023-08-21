import React from "react";
import { Link } from "react-router-dom";
import "./global.css";
import liveIcon from "./global-images/live-icon.svg";
import ads from "./global-images/ads.png";
import BigLighthouse from "./big-lighthouse";
import Trending from "./Trending";
import LatestNews from "./LatestNews";
import NationalNews from "./nationalnews";
import LiveUpdates from "./LiveUpdates";
import WebStories from "./webstories";
import Entertainment from "./Entertainment";
import PhotoGallery from "./PhotoGallery";
import Technology from "./Technology";
import WorldNews from "./WorldNews";
import Automobile from "./Automobile";
import Business from "./Business";
import Lifestyle from "./Lifestyle";
import SportNews from "./SportsNews";
import Astrology from "./AstrologyNews";

const HomeItems = () => {
  return (
    <div id="home">
      <section className="hero">
        <div className="container">
          <div className="row hero-grid">
            <div className="col-md-3 hero-col">
              <ul className="content-list">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Latest News</h2>
                  </Link>
                </div>
                <LatestNews />
              </ul>
            </div>
            <div className="col-md-6 hero-col">
              <ul className="lighthouse">
                <BigLighthouse />
              </ul>
            </div>
            <div className="col-md-3 hero-col">
              <ul className="side-feed-list">
                <div className="tabhead">
                  <Link to="/detailed">
                    <h2>Trending News</h2>
                  </Link>
                </div>
                <Trending />
                <div className="ads">
                  <img src={ads} alt="ads" srcSet />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="one-col">
        <div className="container">
          <div className="single-news">
            <div className="tabhead">
              <Link to="#">
                <h2>National News</h2>
              </Link>
            </div>
            <ul className="news-grid">
              <NationalNews />
            </ul>
          </div>
        </div>
      </section>
      <section className="one-news-sidebar">
        <div className="container">
          <div className="one-side-grid">
            <div className="stories col-md-9">
              <div className="tabhead">
                <Link to="#">
                  <h2>Web Stories</h2>
                </Link>
              </div>
              <ul className="stories-list">
                <WebStories />
              </ul>
            </div>
            <div className="live-update col-md-3">
              <div className="live-timelines">
                <div className="live-head">
                  <img src={liveIcon} alt="live-icon" className="icon" />
                  <span>Live updates</span>
                </div>
                <ul className="news-list">
                  <LiveUpdates />
                </ul>
              </div>
              <div className="ads">
                <img src={ads} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="two-news-sidebar">
        <div className="container">
          <div className="two-side-grid">
            <div className="left-grid">
              <div className="news-tabs">
                <div className="tabhead">
                  <Link to="#">
                    <h2>ENTERTAINMENT</h2>
                  </Link>
                </div>
                <ul className="post-list">
                  <Entertainment />
                </ul>
              </div>
              <div className="news-tabs">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Photo Gallery</h2>
                  </Link>
                </div>
                <ul className="post-list">
                  <PhotoGallery />
                </ul>
              </div>
            </div>
            <div className="sidebar">
              <div className="tabhead">
                <Link to="#">
                  <h2>Technology News</h2>
                </Link>
              </div>
              <ul className="side-feed-list">
                <Technology />
                <div className="ads">
                  <img src={ads} alt="ads" srcSet />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="two-news-sidebar">
        <div className="container">
          <div className="two-side-grid">
            <div className="left-grid">
              <div className="news-tabs">
                <div className="tabhead">
                  <Link to="#">
                    <h2>World News</h2>
                  </Link>
                </div>
                <ul className="post-list">
                  <WorldNews />
                </ul>
              </div>
              <div className="news-tabs">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Automobile news</h2>
                  </Link>
                </div>
                <ul className="post-list">
                  <Automobile />
                </ul>
              </div>
            </div>
            <div className="sidebar">
              <div className="tabhead">
                <Link to="#">
                  <h2>Business News</h2>
                </Link>
              </div>
              <ul className="side-feed-list">
                <Business />
                <div className="ads">
                  <img src={ads} alt="ads" srcSet />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="two-news-sidebar">
        <div className="container">
          <div className="two-side-grid">
            <div className="left-grid">
              <div className="news-tabs">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Lifestyle</h2>
                  </Link>
                </div>
                <ul className="post-list">
                  <Lifestyle />
                </ul>
              </div>
              <div className="news-tabs">
                <div className="tabhead">
                  <Link to="#">
                    <h2>Sports News</h2>
                  </Link>
                </div>
                <ul className="post-list">
                  <SportNews />
                </ul>
              </div>
            </div>
            <div className="sidebar">
              <div className="tabhead">
                <Link to="#">
                  <h2>Astrology News</h2>
                </Link>
              </div>
              <ul className="side-feed-list">
                <Astrology />
                <div className="ads">
                  <img src={ads} alt="ads" srcSet />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeItems;
