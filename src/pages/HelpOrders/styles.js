import styled from 'styled-components';

import Form from '~/components/Form';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 370px;
`;

export const TopHeader = styled.div`
  display: flex;
  margin: 34px 0 24px 0;

  align-items: center;
  justify-content: space-between;
`;

export const CustomForm = styled(Form)`
  flex: 1;
  flex-wrap: wrap;
  width: 450px;
  height: 425px;

  background: #fff;

  h5 {
    margin-bottom: 10px;
  }

  > p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  textarea {
    border: 1px solid #ddd;
    /* height: 127px; */
    padding: 15px;
    border-radius: 4px;
    background: #fff;
    width: 100%;

    margin-bottom: 20px;
  }
`;
