import React from "react";
import Dev from "../Images/dev.png";
import hash from "../Images/hashnode.png";
import blogPicture from "../Images/blog1.jpg";
import blogPicture2 from "../Images/blog2.jpg";
import blogPicture3 from "../Images/blog3.jpeg";
import blogPicture4 from "../Images/blog4.jpg";
import blogPicture5 from "../Images/blog5.png";
import blogPicture6 from "../Images/blog6.png";
const Blog = () => {
  return (
    <div class="blogs">
      <div className="header">
        <h1>Blogs</h1>
        <div className="blog-social">
          <i class="fa fa-pen"></i>
          <a href="https://dev.to/easyvipin" target="blank">
            <i class="fab fa-dev" title="easyvipin's DEV Community Profile"></i>
          </a>
          <a href="https://easyvipin.hashnode.dev/" target="blank">
            <img src={hash} alt="" width="40px" />
          </a>
        </div>
      </div>

      <ul className="blog-list">
        <li className="each-blog">
          <a
            href="https://dev.to/easyvipin/how-events-behave-event-bubbling-explained-4n4"
            target="_blank"
          >
            <div className="card">
              <div className="card-header">
                <span className="tech javascript">#Javascript</span>
              </div>
              <div className="card-body">
                <img src={blogPicture} alt="" />
                <h5>How Events Behave? Event Bubbling Explained</h5>
              </div>
            </div>
          </a>
        </li>
        <li className="each-blog">
          <a
            href="https://dev.to/easyvipin/es6-js-array-methods-you-may-not-know-about-2401"
            target="_blank"
          >
            <div className="card">
              <div className="card-header">
                <span className="tech javascript">#Javascript</span>
              </div>
              <div className="card-body">
                <img src={blogPicture2} alt="" />
                <h5>Js Array Methods You may not know about</h5>
              </div>
            </div>
          </a>
        </li>
        <li className="each-blog">
          <a
            href="https://dev.to/easyvipin/usestate-useeffect-7e"
            target="_blank"
          >
            <div className="card">
              <div className="card-header">
                <span className="tech javascript">#Javascript</span>
                <span className="tech react">#React</span>
              </div>
              <div className="card-body">
                <img src={blogPicture3} alt="" />
                <h5>useState && useEffect ⚛</h5>
              </div>
            </div>
          </a>
        </li>
        <li className="each-blog">
          <a
            href="https://dev.to/easyvipin/this-in-javascript-5627"
            target="_blank"
          >
            <div className="card">
              <div className="card-header">
                <span className="tech javascript">#Javascript</span>
                <span className="tech react">#React</span>
              </div>
              <div className="card-body">
                <img src={blogPicture4} alt="" />
                <h5>"this" in javascript</h5>
              </div>
            </div>
          </a>
        </li>
        <li className="each-blog">
          <a
            href="https://easyvipin.hashnode.dev/the-power-of-splice-array-method"
            target="_blank"
          >
            <div className="card">
              <div className="card-header">
                <span className="tech javascript">#Javascript</span>
              </div>
              <div className="card-body">
                <img src={blogPicture5} alt="" />
                <h5>The Power of Splice ( ) Array method</h5>
              </div>
            </div>
          </a>
        </li>
        <li className="each-blog">
          <a
            href="https://easyvipin.hashnode.dev/the-debugging-feature-of-chrome"
            target="_blank"
          >
            <div className="card">
              <div className="card-header">
                <span className="tech javascript">#Javascript</span>
                <span className="tech react">#React</span>
              </div>
              <div className="card-body">
                <img src={blogPicture6} alt="" />
                <h5>Debugging feature of Chrome</h5>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div className="footer"></div>
    </div>
  );
};

export default Blog;
