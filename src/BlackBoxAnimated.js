import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const BlackBox = styled.div`
  height: ${(props) => props.heightPercentage}%;
  width: 100%;
  background: #000;
  transform-origin: ${(props) => props.xDirection} center;
`;

const BlackBoxAnimated = ({ startAnimation = false, heightPercentage, reverseDirection = false }) => (
  <Motion
    defaultStyle={{ scaleX: 1 }}
    style={{ scaleX: spring(startAnimation ? 0 : 1) }}
  >
    {(style) => (
      <BlackBox
        heightPercentage={heightPercentage}
        xDirection={ reverseDirection ? `left` : `right` }
        style={{
          transform: `scaleX(${style.scaleX})`,
        }}
      />
    )}
  </Motion>
);

BlackBoxAnimated.propTypes = {
  startAnimation: PropTypes.bool,
  heightPercentage: PropTypes.number.isRequired,
  reverseDirection: PropTypes.bool,
};

export default BlackBoxAnimated;
