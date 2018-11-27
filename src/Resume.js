import React, { Component } from 'react';
import { Button, Modal, Image } from 'semantic-ui-react';
import Page1 from './assets/page1.png';
import Page2 from './assets/page2.png';

class ResumeModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  render() {
    const { open, size } = this.state

    return(
      <Modal trigger={<Button onClick={this.show('fullscreen')} size='tiny' style={styles.button}>Resume</Button>}>
        <Modal.Header>Ashley Margallo</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <Image size='huge' src={Page1} />
            <Image size='huge' src={Page2} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const styles = {
  button: {
    backgroundColor: '#444445',
    color: 'whitesmoke',
    marginTop: '5px',
    fontFamily: 'Lora, serif',
  }
}

export default ResumeModal;