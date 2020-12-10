import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home__navbar">navigation</div>
      <div className="home__container">
        <div className="home__sidebar">sidebar</div>
        <div className="home__content">content</div>
      </div>
      <div className="home__footer">footer</div>
    </div>
  );
}
