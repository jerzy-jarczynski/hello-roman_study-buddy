import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Person.styles';

const Person = ({ name, attendance }) => {
  return (
    <Wrapper>
      <p className="name">{name}</p>
      <p className="attendance">attendance {attendance}</p>
    </Wrapper>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

export default Person;
