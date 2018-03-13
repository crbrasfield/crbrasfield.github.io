import React from 'react';
import Transition from '../components/transition';
import SlideShow from '../components/slideshow';

//

export default () => (
    <div>
      <div className="container primary">
        <div className="wrap">
          <SlideShow />
            <h1>About myself...</h1>
            <div>
              <h3>
                Basically, I'm a 25 year old nerd living the dream.
              </h3>
              <div>
                I'm a Birmingham native with a passion for technology and videogames.
                I consider myself <i>extremely</i> lucky to be able to make a living working with computers.
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
      </div>
      <div className="container secondary">
        <div className="wrap">
        <h3 className="center">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
)
