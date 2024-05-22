import React, { useEffect } from "react";
import './About.css';

const About = () =>{
    useEffect(()=>{
        document.title = "About || Aditya Sharma"
    },[]);

    return(
        <div className="about-container">
        {/* <div className="hero">
          <h1>Welcome to MentorMe</h1>
          <p>Empowering the next generation of engineers</p>
        </div> */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Guide4Undergrads, we're dedicated to empowering the next generation of engineers. Our platform connects undergraduates with experienced mentors who share their insights, advice, and firsthand experiences from their college years.
          </p>
          <p>
            Whether you're navigating coursework, acquiring essential skills for the job market, or seeking guidance on your career path, Guide4Undergrads is here to support you. Our community of mentors offers invaluable guidance tailored specifically to help you thrive in your engineering journey.
          </p>
          <p>
            Explore a wealth of tips, stories, and practical advice shared by our mentors. Tap into their collective experience and knowledge to make informed decisions and achieve success in your engineering endeavors.
          </p>
          <p>
            We believe that by connecting aspiring engineers with seasoned professionals, we can create a supportive and collaborative environment where learning and growth flourish. Join us at Guide4Undergrads and embark on a journey of mentorship, guidance, and shared success.
          </p>
          <p>
            Happy exploring!
          </p>
        </div>
      </div>
    );
  };
 
export default About;