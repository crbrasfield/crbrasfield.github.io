import React, { Fragment } from 'react'
import JobItem from '../components/job-item'
import highlight from 'highlight.js';
import 'highlight.js/styles/ocean.css';
import face from '../images/face.jpg';

import code from '../images/icons/vscode.png'
import chrome from '../images/icons/chrome.png'
import command from '../images/icons/command.png'
import krakin from '../images/icons/krakin.png'
import slack from '../images/icons/slack.png'
import spotify from '../images/icons/spotify.png'

const codeText = () => (
`import Developer from "careers";
import { skills } from "./technologies";

class Chase extends Developer {
  state = {
    name: "Chase Brasfield",
    from: "Birmingham, Al",
    focus: "Front end development",
    skills: ["React", "Redux", ...skills]
  }

  render () {
    return (
`
)

const codeText2 = () => (
`    )
  }
}

export default Chase;
`
)

export default class Home extends React.Component {
  state = {
    appearance: window.played ? 'open' : 'closed'
  }

  componentDidMount () {
    highlight.initHighlighting.called = false;
    highlight.initHighlighting();
    
    !window.played && setTimeout(() => {
      this.setState({
        appearance: 'open'
      })

      window.played = true;
    }, 0);
  }

  toggle = () => {
    this.setState((oldState) => ({
      appearance: oldState.appearance == 'open' ? 'closed' : 'open'
    }))
  }

  render () {
    return (
      <div>
        <div className={`code-container ${this.state.appearance}`}>
          <div className="container primary">
            <div className="wrap">
              <div className="row-verticle-center">
                <div className="column">
                  <pre>
                    <code>
                      { codeText() }
                    </code>
                  </pre>
                  <div className="face-in-code">
                    <img src={face} />
                  </div>
                  <pre>
                    <code>
                    { codeText2() }
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={this.toggle} className={`center  caret ${this.state.appearance}`}>
          <i className="fas fa-caret-down"></i>
        </div>              
        <div className="container secondary">
          <div className="wrap">
            <h1 className="center">Technologies</h1>
            <div className="row center">
              <div className="column">
                <h4>
                  Everyday Use
                </h4>
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
                <h4>
                  Some use
                </h4>
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
                <h4>
                  Extras
                </h4>
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
          <div className="wrap icons">
            <h1>My daily toolbelt</h1>
            <div className="row">
              <div className="column">
                <img class="icon" src={code} />
                <div>VS Code</div>
              </div>
              <div className="column">
                <img class="icon" src={krakin} />
                <div>GitKraken</div>
              </div>
              <div className="column">
                <img class="icon" src={command} />
                <div>CMD</div>
              </div>          
            </div>
            <div className="row">
              <div className="column">
                <img class="icon" src={spotify} />
                <div>Spotify</div>
              </div>
              <div className="column">
                <img class="icon" src={chrome} />
                <div>Chrome</div>
              </div>
              <div className="column">
                <img class="icon" src={slack} />
                <div>Slack</div>
              </div>          
            </div>
          </div>
        </div>
      </div>
    )
  }
}
