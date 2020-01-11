import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 270px;
`;

export const TopHeader = styled.div`
  display: flex;
  margin: 34px 0 24px 0;

  align-items: center;
  justify-content: space-between;

  div {
    display: flex;

    input {
      background: #fff;
      margin-left: 16px;

      height: 36px;
      width: 237px;

      border: 1px solid #ddd;
      border-radius: 4px;
      text-align: start;
      padding-left: 40px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;

  background: #fff;

  form {
    padding: 30px;

    > div {
      display: flex;
      flex: 1;

      div {
        margin-right: 15px;

        :last-child {
          margin: 0;
          input {
            background: #f5f5f5;
          }
        }
      }
    }
  }
`;
