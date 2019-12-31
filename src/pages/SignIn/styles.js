import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 0 30px;

  border-radius: 4px;

  max-width: 360px;
  flex: 1;

  @media (max-width: 420px) {
    margin: 0 30px;
  }

  img {
    margin-top: 50px;
  }

  > h2 {
    color: #ee4d64;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  button {
    margin-bottom: 50px;

    span {
      font-weight: bold;
    }
  }
`;
