import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme, hasaverage }) => {
    const grade = parseFloat(hasaverage);
    if (grade >= 0 && grade < 2.5) return theme.colors.error;
    else if (grade >= 2.5 && grade < 4.5) return theme.colors.warning;
    else if (grade >= 4.5 && grade < 6.0) return theme.colors.success;
  }};
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
