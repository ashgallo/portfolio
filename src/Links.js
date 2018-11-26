import React from 'react';
import { Icon } from 'semantic-ui-react';
import Resume from './Resume';

function Links() {
  return (
    <div style={styles.header}>
      <Icon 
        name='github square' 
        //as='a'
        size='large'
        //href='https://github.com/ashgallo' 
        //target='_blank'
      />
      <Icon 
        name='linkedin square' 
        size='large'
      />
      <Icon 
        name='envelope square' 
        size='large'
      />
      <div> 
        <Resume /> 
      </div>
    </div>
  )
}

const styles = {
  header: {
    position: 'relative',
    zIndex: '0',
    textAlign: 'right',
    margin: '0 10px 0 0'
  }
}

export default Links;

