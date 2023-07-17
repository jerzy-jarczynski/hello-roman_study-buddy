import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Grade.styles';

const Grade = ({ average }) => {
  return <Wrapper hasaverage={average}>{average}</Wrapper>;
};

Grade.propTypes = {
  average: PropTypes.string.isRequired,
};

export default Grade;
