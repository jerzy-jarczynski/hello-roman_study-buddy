import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import Grade from 'components/atoms/Grade/Grade';
import Person from 'components/atoms/Person/Person';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Grade average={average} />
      <Person name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

// <StyledButton isSecondary borderRadius="2px">
// X
// </StyledButton>

// background-color: ${(props) => (props.isSecondary ? '#e7e044' : '#c0c7d6')};
// border-radius: ${({ borderRadius }) => borderRadius || '50px'};
