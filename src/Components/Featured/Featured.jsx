import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.gq-magazine.co.uk/photos/64bea21f8651bb7da9ad38c9/master/pass/Dublin_HP.jpg"
          alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.miabid.com/images/portfolio/norway-tromso-winter-sunset-1024.jpg"
          alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Tromsø </h1>
          <h2>456 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.britannica.com/63/153463-050-06B6270D/Grand-Canal-Venice.jpg"
          alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Venice</h1>
          <h2>789 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Jetty_at_candidasa.jpg"
          alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Candi Dasa</h1>
          <h2>159 properties</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Featured;
