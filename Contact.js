import React from 'react';
import './Contact.css'; // Import CSS file for styling

function Contact() {
  return (
    <div className="contact-container">
      {/* <header>
        <h1>Contact Information</h1>
      </header> */}
      <main>
        <section id="personal-info">
          <h2>Personal Information</h2>
          <p>Name: Aditya Sharma</p>
          <p>Email: aditya.sharma.10987@gmail.com</p>
          <p>Phone: 7828078626</p>
          <p>Github: <a href="https://github.com/">github.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/">linkedin.com</a></p>
        </section>
        <section id="education">
          <h2>Education</h2>
          <p>B.Tech - Computer Science & Engineering, Oriental College of Technology</p>
          <p>Year of Graduation: 2024</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <p>Technical Skills: Java, Spring Boot, ReactJS, Selenium WebDriver, Python, HTML, CSS, UI/UX Design, MySQL, JDBC, Swing , AWT</p>
          <p>Behavioral Skills: Problem-Solving, Effective Communication, Leadership, Team Player, Creativity</p>
         
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <h3>Guide4Undergrads</h3>
          <p>Guide4Undergrads is a platform designed to help current undergraduate students navigate their academic and professional journey. The platform provides resources, advice, and mentorship from experienced engineers to guide undergraduates towards success in their careers.</p>
          <p>Tech Stack: ReactJS, Spring Boot, CSS, HTML</p>
          <h3>SecureHide</h3>
          <p>SecureHide is a Java-based File Hiding System with Secure Access and User Management, leveraging MySQL for encrypted file storage. It provides functionalities such as Signup, Login, Email OTP verification, File hiding, File retrieval, Profile management, etc.</p>
          <p>Tech Stack: Core Java, JDBC, MySQL</p>
          <h3>GamesHub</h3>
          <p>GamesHub is a versatile Java-based games hub featuring classic games such as Pong, Tic Tac Toe, and a Sudoku Solver. It includes intuitive GUI features such as score counters, smooth ball movement, and clear win/lose conditions.</p>
          <p>Tech Stack: Java, Swing, AWT, DSA (2D arrays, Backtracking)</p>
          {/* Add more projects here */}
        </section>
        <section id="internships">
          <h2>Internships</h2>
          <h3>Persistent Systems Ltd.</h3>
          <p>Martian Summer Internship Programme focusing on DSA concepts, Java programming, and OS/DBMS knowledge.</p>
          <h3>TribeVibe Entertainment Pvt. Ltd.</h3>
          <p>UI/UX Developer leading the development of TribeVibe application's UI using Figma.</p>
        </section>
        <section id="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Solved 50+ problems on Leetcode</li>
            <li>5 Star Rating on HackerRank</li>
          </ul>
        </section>
        <section id="courses">
          <h2>Courses and Certifications</h2>
          <ul>
            <li>Foundations with JavaScript, HTML and CSS (Duke University)</li>
            <li>SQL for Data Science (University of California, Davis)</li>
            {/* Add more courses and certifications here */}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Aditya Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;