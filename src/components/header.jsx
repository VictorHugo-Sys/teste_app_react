import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink to="/" end className={styles.link}>
            produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="./contato" end className={styles.link}>
            contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
