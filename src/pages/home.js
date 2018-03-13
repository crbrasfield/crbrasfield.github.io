import React, { Fragment } from 'react'
import JobItem from '../components/job-item'

export default (props) => (
    <div>
      <div className="container primary">
        <div className="wrap">
          <h1>Hi,</h1>
          <div>
            <h3>
              I'm Chase!
            </h3>
            <br />
            <p>
              I'm currently a software engineer for TheraNest, a startup in downtown Birmingham.
            </p>
            <br />
            <p>
              I focus primarily on the
              <b> front end development </b>
              of our primary SaaS application. I have been working full time as a developer for right at two years.
              I started as an intern at TheraNest in May 2016 and have since then earned the position of the primary front end developer for our US team.
              I have spent the majority of my time working with our current front end stack - React/Redux and Backbone.js with a few UI libraries sprinkled in.
              I've also recently took it upon myself to dive into our ASP.NET back end and start tackling feature development from a full stack approach.
              I've also developed a small React Native application for TheraNest that we put on the app store about a year ago.
            </p>
          </div>
        </div>
      </div>
      <div className="container secondary">
        <div className="wrap">
          <h1 className="center">Technologies</h1>
          <div className="row center">
            <div className="column">
              <h3>
                Everyday Use
              </h3>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Backbone (jQuery, lodash)</li>
                <li>AJAX</li>
                <li>SASS</li>
                <li>Git</li>         
                <li>Responsive Design</li>              
                <li>Cross Browser Compatability</li>                            
                <li>ES6</li>
                <li>ASP.NET</li>
              </ul>
            </div>
            <div className="column">
              <h3>
                Some use
              </h3>
              <ul>
                <li>React Native</li>              
                <li>Node.js</li>
                <li>Razor</li>
                <li>MongoDB</li>
                <li>Ionic</li>
                <li>Vue.js</li>              
                <li>Angular</li>
                <li>Various Other Libraries</li>
              </ul>
            </div>
            <div className="column">
              <h3>
                Extras
              </h3>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container primary">
        <div className="wrap">
          <h1>
            Work Experience
          </h1>
          <JobItem
            title="Front End Development Intern"
            company="TheraNest"
            link="http://www.theranest.com"
            startDate="April 2016"
            endDate="June 2016"
          >
            Hired on as an itern to develop a free mobile application using React Native.
            The app was capabale of storing basic client data such as contact information,
            demographic information & progress notes. All data was encrypted and stored locally
            on the device. This was my first experience using React. In approximately two months,
            myself and another intern launched our first app to the app store.
          </JobItem>
          <JobItem
            title="Front End Developer"
            company="TheraNest"
            link="http://www.theranest.com"
            startDate="June 2016"
            endDate="Current"
          >
            Promoted from an intern to a full time Front End Developer. Assigned the task
            of front end feature development for the core application. This included building/improving
            reusable UI components, implementing responsive design & implementing the front end functionality
            for several features, which involved communicating with the .NET api.
            Engineering direction changed mid project, which led to taking on a new task
            of integrating React/Redux into an existing Backbone.js application. Currently introducing
            myself into the ASP.NET backend, enabling myself to work from a full stack approach.
            <br />
            <br />            
            <span className="small bold">*Much more information upon request</span>
          </JobItem>
          <JobItem
            title="Volunteer Computer Science Teacher"
            company="TEALS"
            link="https://www.tealsk12.org/"
            startDate="August 2017"
            endDate="Current"
          >
            Volunteering weekly at a highschool teaching CS to students using SNAP! & Python.
          </JobItem>
        </div>
      </div>
      <div className="container secondary">
        <div className="wrap">
          <h1>My daily toolbelt</h1>
          <div className="row">
            <div className="column">VS Code</div>
            <div className="column">GitKraken</div>
            <div className="column">CMD</div>          
          </div>
          <div className="row">
            <div className="column">Spotify</div>
            <div className="column">Chrome</div>
            <div className="column">Slack</div>          
          </div>
        </div>
      </div>
    </div>
)
