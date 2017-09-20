import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlackBoxAnimated from './BlackBoxAnimated';

const getValue = (val) => typeof val === 'string' ? val : `${val}px`;

const ImageBox = styled.div`
  width: ${(props) => getValue(props.width)};
  height: ${(props) => getValue(props.height)};
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
      } else {
        this.reverseAnimation();
      }
    }
  }

  reverseAnimation = () => {
    for (var i = 0; i < this.props.noOfRows; i++) {
      setTimeout(this.reverseLastAnimation, i * this.props.speed);
    }
  }

  runAnimation = () => {
    for (var i = 0; i < this.props.noOfRows; i++) {
      setTimeout(this.startNextAnimation, i * this.props.speed);
    }
  }

  reverseLastAnimation = () => {
    this.setState({
      animationNumber: this.state.animationNumber - 1,
    });
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
      noOfRows,
      ...props,
    } = this.props;

    const {
      animationNumber,
    } = this.state;

    return (
      <ImageBox
        image={image}
        width={width}
        height={height}
        {...props}
      >
        {Array(noOfRows).fill().map((_, i) => (
          <BlackBoxAnimated
            key={i}
            heightPercentage={100 / noOfRows}
            reverseDirection={i % 2 === 0}
            startAnimation={animationNumber >= i + 1}
          />
        ))}
      </ImageBox>
    );
  }
}

ImageBoxAnimation.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
  noOfRows: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
}

export default ImageBoxAnimation;
