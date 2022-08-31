import styled from 'styled-components';

export const TitleWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@1&family=Roboto:wght@500;900&display=swap');
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
    font-family: 'Alumni Sans Collegiate One', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
  }
`;
