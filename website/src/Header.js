import React from 'react'
import { useEffect } from 'react';
import "./Header.css"
import logo from "./IMG_3935.JPG"; 
import resume from "./Dhruv_Updated_PDF.pdf"
import Card from './Card';
import leadership from "./leadership.jpeg"
import { Link } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css"
import Skills from './Skills';
import algo from "./Algo.png";
import react from "./react.png";
import elastic from "./elastic.png";
import java8 from "./java8.png";
// import grad from "./grad.png";
import spring from "./spring.png"

function Header() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    
  const descriptionSumaosof = '<ul>\
                                  <li>Involved in Coding and testing phases of the Software Development Life Cycle in both Waterfall and agile, awareness of Staging and production environment as well</li>\
                                  <li>Involved in developing the User Interface modules using JSPs</li>\
                                  <li>Used Log4J logging framework for logging messages</li>\
                                  <li>Orchestrate the adoption of Spring Boot, streamlining the development process by implementing pre-configured templates and reducing configuration overhead; accelerated time-to-market and increased application stability.</li>\
                                  <li>Integrated relational databases using Hibernate and JPA, leading to a big decrease in data retrieval time.</li>\
                                  <li>Implemented MySQL databases, designing tables, views, and stored procedures to efficiently manage and retrieve data.</li>\
                                  <li>Revamped web interfaces for enhanced user experience, using HTML and CSS, resulting in an improvement visual appeal and responsiveness</li>\
                                  <li>Develop new command Objects and enhancement of existing command objects using Servlets and Core java</li>\
                                  <li>Worked with and utilized Core Java, MySQL, and HTML daily</li>\
                                  <li>Responsible for developing use cases, class diagrams, and sequence diagrams for the modules using UML</li>\
                                  <li>Developed Servlets as controllers to perform requisite functions</li>\
                                </ul>';
  

    const descriptionAvenir = '<ul>\
                      <li>Upgraded and redeployed in-house rails apps and databases.</li>\
                      <li>Redesigned front-end pages using Bootstrap, CSS, and JavaScript</li>\
                      <li>Involved in requirement gathering, configuration, design, development, deployment, and validation.</li>\
                      <li>Used Hibernate for establishing connections and interacting with the database.</li>\
                      <li>Developed presentation layer using JSP, HTML, CSS, and client-side validations using JavaScript, JQuery and JSON.</li>\
                      <li>Development of CRUD functionality for various administrative system-related tables and product components.</li>\
                      <li>Designed static and dynamic web pages using JSP, HTML, and CSS.</li>\
                      <li>Developed application using spring framework.</li>\
                      <li>Used WebLogic Application Server for deploying various components of the application.</li>\
                      <li>Agile methodology was used to develop the application.</li>\
                    </ul>';
    const descriptionHyflex = '<ul>\
    <li>Support physical class session facilitation which includes Operating PTZ camera to key focus points in classroom, cycling through presentation slides, operating, and switching between picture-in-pictures modes and input sources via in-class equipment, streaming and/or recording Lectures, adjusting lecture capture (microphone, video) settings. </li>\
    <li>Support virtual instruction facilitation including managing Zoom Meetings. This involves monitoring Synchronous virtual chat, adding, and removing participants as necessary, placing participants into breakout rooms, informing faculty of questions in the chat, posting relevant information / handouts in chat, and muting noisy participants. Manage areas of course site in BeachBoard including uploading videos to BeachBoard’s video host software “BeachBoard Media” and uploading content items to BeachBoard.</li>\
    </ul > ';

    
    const descriptionFacility = '<ul> \
    <li>Assisted in setting up, taking down equipment for events.</li>\
    <li>Reorganizing rooms after event use.</li>\
    <li>Organized paperwork and performed some office work.</li>\
    <li>Maintained the upkeep of the loading dock, terraces, patios, food court, and courtyard.</li>\
    <li>Organized and stocked supplies.</li>\
    <li>Performed various cleaning activities like sweeping, moping, cleaning carpets, cleaning tables, glass doors and windows, removing graffiti and emptying trash cans.</li >\
    </ul > '
    
    
  return (
    <div className='website'>
          <div className='header'>
          <Link to='home' spy={true} smooth={true} offset={-100} duration={500}><img className='header_logo' src={logo} /> </Link>
              <h1><Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Dhruv Savla</Link></h1>
              
              <div className='nav-options'>
                  <h4><Link to = 'experience' spy={true} smooth={true} offset={-100} duration={500}>Experience</Link></h4>
                  <h4><Link to = 'project' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></h4>
                  <h4><Link to = 'education' spy={true} smooth={true} offset={-100} duration={500}>Education</Link></h4>
                  <h4><Link to='leadership' spy={true} smooth={true} offset={-100} duration={500}>Leadership</Link></h4>
                  <h4><Link to = 'skills' spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></h4>
                  <h4><Link to = 'certifications' spy={true} smooth={true} offset={-100} duration={500}>Certifications</Link></h4>
              </div>
        </div>
        <div className='home'>
            <div className='background-image'>
                <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg'></img>
              </div>
            <div className='avatar'>
                  <img src = "https://cdn-icons-png.flaticon.com/512/3242/3242257.png"/>
            </div>
              <div className='intro'>
                  <h2>Hey there! 👋 I'm Dhruv Savla, a passionate computer science student on a journey to turn caffeine into code. 🚀 My playground? Lines of code, algorithms, and a touch of creativity. 🖥️ Currently exploring the vast universe of software engineering, I'm on the lookout for opportunities to turn my passion into a profession. Let's build something awesome together! 🌟 #CodeDreamer #FutureSWE #TechEnthusiast</h2>
              </div>  
              <div className='resume'>
                <a href={resume} target="_blank"
                    rel="noreferrer">
                    Resume
                  </a> 
              </div>
              <div className='linkedin'>
                <a href="https://www.linkedin.com/in/dhruv-s-9634a2294" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
              </div>
              <div className='github'>
                <a href="https://github.com/dhruvsavla" target="_blank" rel="noreferrer">
                    Github
                </a>
              </div>
          </div>
          
        <div className='experience' id="experience">
        <h1>EXPERIENCE</h1>
        <div className='home_row' data-aos="zoom-in">
                <Card
                    title='SUMATOSOFT | AUG 2023 – TILL DATE |  JUNIOR JAVA DEVELOPER'
                    useList={true}
                    description={descriptionSumaosof}
                    style={{ backgroundColor: '#DCE775' }}
                />
            </div>
            <div className='home_row' data-aos="zoom-in">
                <Card
                    title='AVENIR TECHNOLOGY | JAN 2017 – DEC 2018 | JUNIOR WEB DEVELOPER'
                    useList={true}
                    description={descriptionAvenir}
                    style={{ backgroundColor: '#DCE775' }}
                />
            </div>
            <div className='home_row' data-aos="zoom-in">
                <Card
                    title='Academic Technology Services | Aug 2021 – May 2023 | Hyflex Student Assistant'
                    useList={true}
                    description={descriptionHyflex}
                    style={{ backgroundColor: '#CDDC39' }}
                />
              </div>
              
              <div className='home_row' data-aos="zoom-in">
                <Card
                    title='Facility Services University Student Union | Oct 2019 – Jan 2020 | Student Assistant'
                    useList={true}
                    description={descriptionFacility}
                    style={{ backgroundColor: '#CDDC39' }}
                />
              </div>
                  
        </div>
              
        <div className='project' id='project' >
              <h1>Projects</h1>
              <div className='home_row' data-aos="fade-up">
              <Card
                      title='Bloggit'
                      description='Currently working on creating a social media web app where people can post blogs and read blogs. Other functionalities include like, comment, download as pdf, share, ... Techoologies used: React, Node, Express, firbase, graphql'
                      style={{ height: '250px', backgroundColor: '#F44336', fontWeight: '500', color: 'white', textAlign: 'center'}}
                />
              </div>
              <div className='home_row' >
                <Card data-aos="fade-right"
                    title='Amazon Clone'
                    description='Pioneered a robust e-commerce platform mirroring Amazon&apos;s features using the MERN stack and Firebase. Developed user authentication and dynamic listings. Utilized React for the frontend and Node.js/Express.js for the backend, contributing to a 40% improvement in website responsiveness. Hosted on Firebase for seamless deployment and scalability. Employed Stripe for payment.'
                      link='https://challenge-4cc94.web.app'
                      style={{ height: '250px', backgroundColor: '#F44336', fontWeight: '500', color: 'white', textAlign: 'center'}}
                />
                <Card data-aos="fade-left"
                    title='Whatsapp Clone'
                    description='Created a chat app using MERN Stack to get real-time messages. Reengineered google authentication. Utilized React for the frontend and Node.js/Express.js for the backend. Employed Pusher for real-time functionality. Launched on Firebase for seamless hosting and scalability.'
                      link='https://whatsapp-mern-b6637.web.app/'
                      style={{ height: '250px', backgroundColor: '#E91E63', fontWeight: '500', color: 'white', textAlign: 'center'}}
                    />
              </div>
              <div className='home_row' data-aos="fade-up">
              <Card data-aos="fade-right"
                    title='Automobile Lookup'
                    description='Constructed a Java-based web vehicle management app with Spring Boot. Enables users to search, sort, and manage vehicles with PostgreSQL and JPA, tested using Postman.
                    Technologies used: Java, Spring boot, MVC, Maven, Hibernate, Rest APIs, JPA, PostgreSQL, HTML, CSS, JS, JSON, Postman'
                      
                      style={{ height: '250px', backgroundColor: '#9C27B0', fontWeight: '500', color: 'white', textAlign: 'center'}}
                />
                <Card data-aos="fade-left"
                    title='Pathshala – An Attendance tracking application'
                    description='Launched an Android app for remote student attendance and web portal for reports. Customized for NGO to track class dropouts, following SDLC and designing UML diagrams.
                    Technologies Used: Android, HTML5, CSS3, Java, JavaScript, Oracle'
                      style={{ height: '250px', backgroundColor: '#FF1744', fontWeight: '500', color: 'white', textAlign: 'center'}}
                    />
              </div>
              <div className='home_row' data-aos="fade-up">
              <Card data-aos="fade-right"
                    title='Stone Paper Scissor User vs Computer Game'
                    description='The purpose of this project was to make a user vs computer game (rock, paper, scissor) using the conditional statements and loops. The user enters an input and the computer generates a random output. Environment: Python 3, PyCharm, MacOS'
                      style={{ height: '250px', backgroundColor: '#F50057', fontWeight: '500', color: 'white', textAlign: 'center'}}
                />
                <Card data-aos="fade-left"
                    title='Air Quality Index Calculator'
                    description='The purpose of the project was to calculate the Air Quality Index. In this project I developed air quality index calculator that determines the AQI from the sensor data, following methods published by the United States Environmental Protection Agency (EPA). Using the conditional statements and loops this calculator determines the air quality and categorizes it as “Good”, “Moderate”, “Unhealthy for sensitive groups”, “Unhealthy”, “Very Unhealthy”, “Hazardous”. Environment: Python 3, PyCharm, MacOS'
                      style={{ height: '250px', backgroundColor: '#E91E63', fontWeight: '500', color: 'white', textAlign: 'center'}}
                    />
              </div>

              </div>

              <div className='education' id='education' >
                  <h1>Education</h1>
                  <h2>California State University, Long Beach</h2>
                  <div className='ed-img' >
                    <img src = "https://media4.giphy.com/media/EKIiQBi6KDmQc5oVhI/giphy.gif?cid=6c09b952067ofkvwjf4k428kmsx78q0x2xy0itbdlvxdkgn3&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" />
                  </div>
                  <div className='ed-info'>
                  
                    <ul >
                      <li>Dates: Jan 2019 - May 2023</li>
                      <li>Major: Computer Science</li>
                      <li>GPA: 3.3</li>
                    </ul>
                </div>
              </div>

              <div className='leadership' id='leadership'>
                  <h1>Leadership Experrience</h1>
                  <h2>International Student Success Panel – CSULB (2019)</h2>
                  <img src = {leadership} data-aos="zoom-in"/>
                  <ul >
                      <li>I was selected by my instructor to be a panelist, for fall 2019 panel discussion on international student success, to serve as the student representative from my country.</li>
                      <li>The focus of the panel was “How to be successful in the university” the primary audience was English language student from the American Language Institute (ALI) who aim to enter the university. The discussion was focused on student expectations, what works/what doesn’t and how to build leadership and success.</li>
                      <li>As a panelist/representative my role was to guide students for achieving success in the university and answering the doubts and questions on how to excel in their academics at this university.</li>
                      <li>From this experience, I achieved an ample amount of confidence in public speaking, I overcame stage fear, I self-explored my side of advising and helping students like me to follow their path towards success.</li>
                  </ul>
              </div>
              
          


          <div className='skills'>
              <h1>Skills</h1>
              <Skills/>
          </div>

          <div className='certifications' >
              <h1>Certifications</h1>
              <div className='cert-card' >
                  {/* <img src={grad} data-aos="fade-right"/> */}
                  <img src={spring} data-aos="fade-left"/>
              </div>
              <div className='cert-card' >
                  <img src={elastic} data-aos="fade-right"/>
                  <img src = {java8} data-aos="fade-left"/>
              </div>
              <div className='cert-card'>
                  <img src={algo} data-aos="fade-right"/>
                  <img src={react} data-aos="fade-left"/>
                  
              </div>
              
                
          </div>
    </div>
  )
}

export default Header