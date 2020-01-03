import { Form } from '@rocketseat/unform';
import styled from 'styled-components';

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #444;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 0.9rem;
  }

  input {
    height: 50px;
    border: 1px solid #ddd;
    padding: 0 15px;
    border-radius: 4px;
    background: #fff;
    margin: 0 0 20px;
    width: 100%;

    &::placeholder {
      color: #999;
    }
  }

  > span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;
