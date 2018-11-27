import React from 'react';
import { Header, Grid, Image, Icon } from 'semantic-ui-react';
import Tacotaco from './assets/projects/tacotaco.png';
import Plantmama from './assets/projects/plantmama.png';
import Choreninja from './assets/projects/choreninja.png';

const Projects = () => (
  <div style={styles.background}>
    <Header size='huge' style={styles.header}>My work</Header>
    <Grid columns={3} divided style={styles.grid}>
      <Grid.Row>
        <Grid.Column>
          <Image src={Tacotaco} rounded />
        </Grid.Column>
        <Grid.Column>
          <Image src={Plantmama} rounded />
        </Grid.Column>
        <Grid.Column>
          <Image src={Choreninja} rounded />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header size='medium'>
            <Icon name='github' size='large' /> 
            Taco Taco
          </Header>
          <Header size='small'>Project time: 7 days </Header>
          <p>
            React application integrating the Tacofancy API, allowing the user to create a custom taco or to generate a taco by random.  Project proposal inluded a wireframe, mindmap, and user stories.  Client-side requests are handled by Axios.  Data from the API is managed by Context and made available throughout the application through providers and consumers.  As an added bonus to the application, users can shop for fun taco accessories.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header size='medium'>
            <Icon name='github' size='large' /> 
            Plant Mama
          </Header>
          <Header size='small'>Project time: 8 days </Header>
          <p>
            Full-stack application using Node.js and Express as the server.  Database and schema are handled by MongoDB and Mongoose.  Front-end of the application is handled by React along with Axios and Context.  The goal in creating this application is to progress into a native application that will include user authentication and continual improvements to better the user experience.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header size='medium'>
            <Icon name='github' size='large' /> 
            Chore Ninja
          </Header>
          <Header size='small'>Project time: 10 days </Header>   
          <p>
            Chore Ninja is a collaborative on-going project.  It is a full-stack, user-authenticated React application.  My partner and I pair programmed the back-end of the application.  Ensuring that the database structure and routes made sense and were well programmed was a top priority.  Once the back-end was sound, building the front-end with React began.  My focus has been on the user's dashboard and building the components for chores and rewards.  Those components include using Context, React forms, Multer to upload images (via back-end) and Material-Ui to style.  The goal is to get Chore Ninja to full functionality and on to the React Native platform.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

const styles = {
  background: {
    border: '2px solid lightgrey',
  },
  header: {
    margin: '40px 10px',
    textAlign: 'left',
    fontFamily: 'Lora, serif',
    fontSize: '30px',
  },
  grid: {
    textAlign: 'center',
    display: 'block',
    margin: '40px 10px 20px 80px',
    fontFamily: 'Lora, serif',
  }
}

export default Projects;