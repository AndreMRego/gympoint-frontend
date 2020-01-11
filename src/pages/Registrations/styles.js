import { MdCheckCircle } from 'react-icons/md';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 120px;
`;

export const Status = styled(MdCheckCircle)`
  color: ${props => (props.status.active ? '#42CB59' : '#DDD')};
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
    .row {
      display: flex;
      flex: 1;

      > div {
        display: flex;
        flex-direction: column;
        flex: 1;

        margin-right: 15px;

        #end_date {
          background: #f5f5f5;
        }

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
