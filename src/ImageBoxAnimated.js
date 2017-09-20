import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlackBoxAnimated from './BlackBoxAnimated';

const ImageBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center;
`;

class ImageBoxAnimation extends React.Component {
  componentWillMount() {
    this.setState({
      animationNumber: 0,
    });
  }

  componentDidMount() {
    if(this.props.startAnimation) {
      this.runAnimation();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.startAnimation !== nextProps.startAnimation) {
      if(nextProps.startAnimation) {
        this.runAnimation();
      }
    }
  }

  runAnimation = () => {
    setTimeout(this.startNextAnimation, 0);
    setTimeout(this.startNextAnimation, 500);
    setTimeout(this.startNextAnimation, 1000);
    setTimeout(this.startNextAnimation, 1500);
  }

  startNextAnimation = () => {
    this.setState({
      animationNumber: this.state.animationNumber + 1,
    });
  }

  render() {
    const {
      image,
      width,
      height,
    } = this.props;

    const {
      animationNumber,
    } = this.state;

    return (
      <ImageBox
        image={image}
        width={width}
        height={height}
      >
        <BlackBoxAnimated
          heightPrecentage={25}
          reverseDirection={false}
          startAnimation={animationNumber >= 1}
        />
        <BlackBoxAnimated
          heightPrecentage={25}
          reverseDirection={true}
          startAnimation={animationNumber >= 2}
        />
        <BlackBoxAnimated
          heightPrecentage={25}
          reverseDirection={false}
          startAnimation={animationNumber >= 3}
        />
        <BlackBoxAnimated
          heightPrecentage={25}
          reverseDirection={true}
          startAnimation={animationNumber >= 4}
        />
      </ImageBox>
    );
  }
}

ImageBoxAnimation.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.any,
  height: PropTypes.any,
}

export default ImageBoxAnimation;
