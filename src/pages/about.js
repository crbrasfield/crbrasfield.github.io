import React from 'react'
import family from '../images/family.jpg'
import Transition from '../components/transition'

//

export default () => (
    <div>
      <div className="container primary">
        <div className="wrap">
        <img className="picture" src={family} />      
            <h1>About myself...</h1>
            <div>
              <h3>
                Basically, I'm a 25 year old nerd living the dream.
              </h3>
              <div>
                I'm a Birmingham native with a passion for technology & videogames.
                I consider myself <i>extremely</i> lucky to be able to make a living working with computers.
              </div>
              <br />
              <div>
                The majority of my week is spent looking at a monitor, so I always jump at the chance to
                get outside and spend some time in the sun with my dog, Benji.
              </div>
              <br />
              <div>
                I'm a soon to be husband (March 31, 2018)! Animal rescue & fostering
                are very important to me. Adopting my dog Benji was one of the best decisions
                I've ever made.
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
