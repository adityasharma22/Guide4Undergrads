import React, { useEffect } from "react";
import {Container,Button} from "reactstrap";
import './Home.css';

const Home = () =>{
    useEffect(()=>{
        document.title = "Home || aditya Sharma"
    },[]);

    return(
      <div className="home-container">
      <div className="hero">
        <h1>Welcome Techies</h1>
        <p>Guide4Undergrads: Your Companion in the Journey to Success</p>
      </div>
      
      <div className="feature-section">
        <h2>Why Choose Guide4Undergrads?</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Expert Guidance</h3>
            <p>Connect with experienced engineers who provide personalized advice and insights.</p>
          </div>
          <div className="feature-item">
            <h3>Resource Library</h3>
            <p>Access a treasure trove of study materials, career resources, and insider tips.</p>
          </div>
          <div className="feature-item">
            <h3>Community Engagement</h3>
            <p>Join a vibrant community of students and mentors to share experiences and support each other.</p>
          </div>
        </div>
      </div>

      <div className="long-content">
        <h2>Why Guide4Undergrads?</h2>
        <p>
          Guide4Undergrads is dedicated to helping engineering students navigate their academic and professional journey with confidence and success.
        </p>
        <ul>
          <li>Personalized guidance tailored to your needs</li>
          <li>Comprehensive resources for every stage of your education and career</li>
          <li>Engaging community to connect with peers and mentors</li>
          <li>Continuous support and inspiration to unlock your full potential</li>
        </ul>
      </div>
      
      <div className="cta">
        <p>Ready to embark on your engineering journey?</p>
        <button>Get Started Now</button>
      </div>
    </div>
    );
};
export default Home;
