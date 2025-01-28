import React from 'react'
import "./job-section.css";
function Heder() {
  return (
    <div className='flex items-center justify-center'>
       <div className="jobs-section-container">
      <h3 className="jobs-main-title">Jobs & Education</h3>
      <div className="jobs-wrapper">


        {/* <!-- timeLine --> */}
        <div className="timeline-wrapper">
          {/* <!-- event --> */}
          <div className="timeline-event">
            <div className="event-box event-date">2002 - Present</div>
            <div className="event-box event-content">
              <h4>Computer Science</h4>
              <p className="event-sub-text">Self-taught</p>
            </div>
            <div className="event-point"></div>
          </div>

          {/* <!-- event --> */}
          <div className="timeline-event">
            <div className="event-box event-content">
              <h4>Computer (Software) Engineer</h4>
              <p className="event-sub-text">University of Azad Urmia</p>
            </div>
            <div className="event-box event-date">2007 - 2009</div>
            <div className="event-point"></div>
          </div>

          {/* <!-- event --> */}
          <div className="timeline-event">
            <div className="event-box event-date">2004 - Present</div>
            <div className="event-box event-content">
              <h4>Full-Stack Developer</h4>
              <p className="event-sub-text">Freelancer</p>
            </div>
            <div className="event-point"></div>
          </div>
          {/* <!-- event --> */}
          <div className="timeline-event">
            <div className="event-box event-content">
              <p className="event-sub-text">My own company</p>
              <h4>Founder, Chairman, and CEO</h4>
              <p className="event-sub-text">Self-taught</p>
            </div>
            <div className="event-box event-date">2002 - Present</div>
            <div className="event-point"></div>
          </div>

          {/* <!-- event --> */}
          <div className="timeline-event">
            <div className="event-box event-date">Jan 2014 – Aug 2015</div>
            <div className="event-box event-content">
              <h4>Senior Software & Web Developer</h4>
              <p className="event-sub-text">Raizanpad Co.</p>
            </div>
            <div className="event-point"></div>
          </div>

          {/* <!-- event --> */}
          <div className="timeline-event">
            <div className="event-box event-content">
              <h4>Computer Science</h4>
              <p className="event-sub-text">Self-taught</p>
            </div>
            <div className="event-box event-date">2002 - Present</div>
            <div className="event-point"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Heder
