import React from 'react';
import styles from './contato.module.css';
import foto from '../../img/contato.jpg';
import anime from './animation.module.css';
import Head from './head.jsx'

const Contato = () => {
  return (
    <div className={`${styles.contato} ${anime.animation}`}>
      < Head title='produtos - contato' description='entre em contato' />
      <div>
        <img src={foto} alt="" />
      </div>
      <div className={styles.lista}>
        <ul>
          <li>vic@gmail.com</li>
          <li>88888-8888</li>
          <li>instagram@</li>
          <li>rua xxxxx xxxx</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
