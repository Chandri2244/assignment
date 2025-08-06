import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const About = () => {
  return (
    <>
    <div className='about-section pt-6 pb-6 mt-5' id='about-id'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>About Us</h1>
            <p style={{fontWeight: 'bold', fontSize:'20px'}}>Change Today to have better Tomorrow!</p>
            <p className='about-p'>
              This is a non-profit organization with a mission to create lasting impact in the lives of underprivileged communities. Our work focuses on uplifting individuals through education, healthcare, women empowerment, environmental sustainability, and skill development.
              Driven by a passionate team of volunteers, social workers, and professionals, we believe in the power of collaboration and compassion. Our goal is to bridge the gap between opportunity and access by delivering grassroots solutions tailored to real-world problems.
              We collaborate with schools, community groups, and local governments to implement programs that are sustainable, inclusive, and transparent. Every step we take is aimed at building a more equitable society where everyone has the opportunity to thrive.
              <span>Our Vision</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* vision- mission */}
    <div className='mission-vision d-flex flex-column justify-content-center align-items-center'>
      <div className="card-wrapper mb-4">
        <div className="shadow vision-card p-4">
          <h3 className="vision-title text-center">Our Vision</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_tdpa5q9Q_hALcMj4Zfsw7krBBVJ2KWHdQ&s"
            className="vision-image d-block mx-auto my-3" alt='vision'
          />
          <p className="paragraph text-center">
            To build a just, inclusive, and empowered society where every individual lives with dignity and opportunity.
          </p>
        </div>
      </div>
      <div className="card-wrapper mb-4">
        <div className="shadow mission-card p-4">
          <h3 className="mission-title text-center">Our Mission</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNL4FjG2CswM33bJVRPPe7AOgdiE864eNUg&s"
            className="vision-image d-block mx-auto my-3" alt='mission'
          />
          <p className="paragraph text-center">
            {/* 🤝 Our Mission<br /> */}
            To serve marginalized communities by providing access to education, healthcare, and livelihood opportunities
            while promoting equality and sustainable development.
            
            We are committed to transparency, impact, and empathy, ensuring that every donation and effort reaches those who need it the most.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default About