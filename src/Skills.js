import React from 'react';
import CSS from './assets/logos/css.svg';
import ES6 from './assets/logos/es6.svg';
import Express from './assets/logos/express.png';
import Git from './assets/logos/git.svg';
import Github from './assets/logos/github.svg';
import Html from './assets/logos/html.svg';
import JS from './assets/logos/js.svg';
import Mongodb from './assets/logos/mongodb.svg';
import Nodejs from './assets/logos/nodejs.svg';
import Rlogo from './assets/logos/rlogo.svg';
import SUIReact from './assets/logos/suireact.png';
import NPM from './assets/logos/npm.svg';
import VScode from './assets/logos/vscode.svg';
import { Header, Grid, Image } from 'semantic-ui-react';


const Skills = () => (
  <div>
    <Header size='huge' style={styles.header}>Skills</Header>
    <Grid column='equal' textAlign='center' style={styles.grid}>
      <Grid.Row>
        <Grid.Column>
          <Image src={Html} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={CSS} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={JS} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={ES6} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={NPM} size='huge'></Image>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src={Rlogo} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={SUIReact} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={Git} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={Github} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={Nodejs} size='huge'></Image>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
          <Image src={VScode} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={Express} size='huge'></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src={Mongodb} size='huge'></Image>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

const styles = {
  header: {
    margin: '40px 10px',
    textAlign: 'left',
    fontFamily: 'Lora, serif',
    fontSize: '30px',
  },
  grid: {
    display: 'block',
    marginTop: '40px'
  }
}

export default Skills;