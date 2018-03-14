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
              I'm currently a software engineer for TheraNest, a startup in downtown Birmingham.
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
      <div className="container primary">
        <div className="wrap">
          <div className="row">
            <div className="column">
              <h1>About myself...</h1>
              <div>
                <h4>
                  Basically, I'm a 25 year old nerd living the dream.
                </h4>
                <div>
                  I'm a Birmingham native with a passion for technology and videogames.
                  I consider myself extremely lucky to be able to make a living working with computers.
                </div>
                <br />
                <div>
                  I spend most of my day is spent inside on the computer or playing video games, so I
                  enjoy spending the rest of that time outdoors with my friends, family and dog.
                </div>
                <br />              
                <div>
                  I watch a lot of youtube and eat a lot of chipotle.
                </div>
                <br />
                <div>
                  As of March 31, 2018 I will be a husband!
                </div>
              </div>
            </div>
            <div className="column">
              <SlideShow />
            </div>
          </div>
        </div>
      </div>
      <div className="container secondary">
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
