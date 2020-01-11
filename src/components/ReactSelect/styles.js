import Async from 'react-select/async';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AsyncWrapper = styled(Async)`
  min-width: 150px;
  margin-bottom: 20px;

  .react-select__control {
    background: transparent;
  }

  .react-select__value-container {
    outline: initial !important;
    max-height: 45px;

    background: transparent;
  }

  .react-select__indicator-separator {
    display: none;
  }
`;
