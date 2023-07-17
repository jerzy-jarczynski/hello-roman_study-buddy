import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 15px 0 30px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
    padding: 0;

    &.name {
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: 19.2px;
    }

    &.attendance {
      font-size: ${({ theme }) => theme.fontSize.s};
      line-height: 12.4px;
    }
  }
`;
