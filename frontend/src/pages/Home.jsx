import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Explore my projects, read my blogs, and connect with me for exciting opportunities.
        </p>
      </header>

      <section className="home-projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <img
              src={require('../assets/images/project1.jpg')}
              alt="Project 1"
            />
            <h3>Modern Calculator App</h3>
            <p>
            This app has a sleek design and is easy to navigate. It supports a range of mathematical operations and has a history log to track calculations.This free app has a colorful, user-friendly interface and large buttons. It has various themes and you can make the buttons vibrate or change color when pressed.
            </p>
            <Link to="/project/1">View Details</Link>
          </div>

          <div className="project-card">
            <img
              src={require('../assets/images/project2.jpg')}
              alt="Project 2"
            />
            <h3>Weather App</h3>
            <p>
            A weather app is a program on a phone or computer that provides information about the weather, such as the temperature, precipitation, and other details. People use weather apps to plan their day and decide what to wear.
            </p>
            <Link to="/project/2">View Details</Link>
          </div>
        </div>
      </section>

      <section className="home-blogs">
        <h2>Latest Blogs</h2>
        <div className="blog-list">
          <div className="blog-card">
            <img
              src={require('../assets/images/blog1.jpg')}
              alt="Blog 1"
            />
            <h3>Journey on my web Development</h3>
            <p>My journey began with a fascination for how websites function. I was curious to know how those beautiful interfaces and complex interactions worked behind the scenes. So, I dove into learning the essentials—HTML and CSS.</p>
            <Link to="https://dev.to/uchexm/my-journey-into-web-development-from-the-basics-to-building-real-projects-58cj#:~:text=How%20I%20Got%20Started%3A%20My,the%20essentials%E2%80%94HTML%20and%20CSS.">Read More</Link>
          </div>

          <div className="blog-card">
            <img
              src={require('../assets/images/blog2.jpg')}
              alt="Blog 2"
            />
            <h3>Journey on Fullstack Development</h3>
            <p>The basic of web development is obviously HTML, later accompanied by CSS and JavaScript. Starting from HTML and CSS, the journey leads ones to become web designer, front-end developer, JavaScript developer, application designer, back-end developer, UI/UX Designer etc.</p>
            <Link to="https://slocumstudio.com/journey-through-modern-web-development/">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
