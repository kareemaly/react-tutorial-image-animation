import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBoxAnimated from './ImageBoxAnimated';

const Wrapper = styled.div`
`;

class App extends Component {
  componentWillMount() {
    this.setState({
      startFirstBoxAnimation: false,
    });
  }

  render() {
    const {
      startFirstBoxAnimation,
    } = this.state;
    return (
      <Wrapper>
        <button onClick={() => this.setState({ startFirstBoxAnimation: true })}>Start first box</button>
        <ImageBoxAnimated
          image={'https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg'}
          width={600}
          height={400}
          startAnimation={startFirstBoxAnimation}
        />
        <ImageBoxAnimated
          image={'https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg'}
          width={300}
          height={200}
          startAnimation={true}
        />
      </Wrapper>
    );
  }
}

export default App;
