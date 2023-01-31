import styled from 'styled-components'

export const StyleCardComic = styled.div`
  max-width: 100vw;
  padding: 3vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }
`;

export const StyleDataCardComic = styled.div`
  font-family: 'Arial';
  text-align: right;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  span {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: right;
  }
`;

export const StyleCharacters = styled.div`

`;