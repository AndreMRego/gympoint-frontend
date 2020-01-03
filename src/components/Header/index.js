import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo.svg';
import { menuItems } from '~/constants';

import { Container, MenuItem, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Gympoint" />
        <Link to="/students">GYMPOINT</Link>

        <nav>
          {menuItems.map(item => (
            <MenuItem key={item.id} to={item.link}>
              {item.title}
            </MenuItem>
          ))}
        </nav>
      </div>

      <aside>
        <Profile>
          <strong>Andre Marcelo</strong>
          <button
            type="button"
            onClick={() => {
              console.tron.log('logout');
            }}
          >
            sair do sistema
          </button>
        </Profile>
      </aside>
    </Container>
  );
}
