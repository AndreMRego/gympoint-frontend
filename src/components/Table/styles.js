import styled from 'styled-components';

export const Container = styled.table`
  background: #fff;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    padding: 30px 0 20px 0px;
    text-align: left;

    :first-child {
      padding-left: 30px;
    }
  }

  td {
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid rgba(224, 224, 224, 1);

    :first-child {
      padding-left: 30px;
    }

    button {
      border: 0;
      font-size: 0.9rem;

      &:first-child {
        color: #4d85ee;
      }

      color: #de3b3b;
      margin-left: 20px;
    }
  }
`;
