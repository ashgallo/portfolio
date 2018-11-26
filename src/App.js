import React from 'react';
import Links from './Links';
import Intro from './Intro';
import { Divider } from 'semantic-ui-react';
import Projects from './Projects';
import Skills from './Skills'

const App = () => (
  <div>
    <Links />
    <Intro />
    <Divider />
    <Projects />
    <Divider />
    <Skills />
  </div>
)

export default App;