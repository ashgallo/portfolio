import React from 'react';
import { Image } from 'semantic-ui-react';
import Headshot from './assets/headshot.png';

const Intro = () => (
  <div style={styles.intro}>
    <Image src={Headshot} size='medium' circular style={styles.img}/>
    <p>Hello, I'm so glad you're here.  I'm Ashley, a junior web developer based out of Salt Lake City. </p>
  </div>
)

const styles = {
  intro: {
    fontFamily: 'Lora, serif',
    fontSize: '25px',
    height: 'auto',
    width: 'auto',
    alignItems: "center",
    display: 'flex',
    flexDirection: "row",
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  img: {
    margin: '30px 35px 10px 10px',
  }
}

export default Intro;