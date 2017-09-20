import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBoxAnimated from './ImageBoxAnimated';

const Wrapper = styled.div`
`;

class App extends Component {
  componentWillMount() {
    this.setState({
      startFirstBoxAnimation: false,
      startSecondBoxAnimation: true,
    });
  }

  render() {
    const {
      startFirstBoxAnimation,
      startSecondBoxAnimation,
    } = this.state;

    return (
      <Wrapper>
        <ImageBoxAnimated
          image={'https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg'}
          width={600}
          height={400}
          noOfRows={8}
          speed={200}
          startAnimation={startFirstBoxAnimation}
          onClick={() => this.setState({ startFirstBoxAnimation: !startFirstBoxAnimation })}
        />
        <ImageBoxAnimated
          image={'https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg'}
          width={`20vw`}
          height={`15vw`}
          noOfRows={4}
          speed={100}
          startAnimation={startSecondBoxAnimation}
          onClick={() => this.setState({ startSecondBoxAnimation: !startSecondBoxAnimation })}
        />
      </Wrapper>
    );
  }
}

export default App;
