import React from 'react';
import Transition from '../components/transition';
import SlideShow from '../components/slideshow';

//

export default () => (
    <div>
      <div className="container primary">
        <div className="wrap">
          <h1>Hi,</h1>
          <div>
            <h4>
              I'm Chase!
            </h4>
            <br />
            <p>
              I'm currently a software engineer
              for <a className="special" href="http://www.theranest.com">TheraNest</a>, a startup in downtown Birmingham.
            </p>
            <br />
            <p>
              I focus primarily on the front end development
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
          <div className="row">
            <div className="column center-self">
              <h1>About myself...</h1>
              <div>
                <h4>
                  I'm basically a 25 year old nerd that loves the outdoors
                  and working with technology.
                </h4>
                <p>
                  I'm a Birmingham native with a love for animals, music and videogames.
                  Since most of my time during the week is spent inside looking at a computer monitor,
                  I enjoy getting outside and being active.
                </p>
                <br />
                <p>
                  As of <a className="special" href="https://www.theknot.com/us/julianne-erwin-and-chase-brasfield-mar-2018-63098923-f66c-4131-a893-7000f24d7285">March 31, 2018</a> I will be a husband!
                </p>
              </div>
            </div>
            <div className="column">
              <SlideShow />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="wrap center">
        <h3>
          Things I enjoy
        </h3>
          <div className="row">
            <div className="column">
              <ul>
                <li>Playing Paintball</li>
                <li>Dogparks</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>Disc Golf</li>
                <li>Snowboarding</li>
                <li>Video Games</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>Hiking</li>                
                <li>Ultimate Frisbee</li>
                <li>Ping Pong</li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
)
