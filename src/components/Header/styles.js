import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;

  padding: 20px 30px;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 45px;
    }

    > a {
      color: #ee4d64;
      margin-left: 12px;
      font-weight: bold;
    }

    nav {
      display: flex;
      align-items: center;
      height: 32px;

      margin-left: 30px;
      padding-left: 30px;
      border-left: 1px solid #ddd;
    }
  }
`;

export const MenuItem = styled(NavLink)`
  margin-left: 20px;

  color: #999;
  font-weight: bold;
  font-size: 0.9rem;

  &.active {
    color: #444;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #666;
    font-size: 0.8rem;
  }

  button {
    color: #de3b3b;
    font-size: 0.8rem;

    border: 0;
  }
`;
