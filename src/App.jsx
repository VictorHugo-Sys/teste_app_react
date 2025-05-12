import React from 'react';
import styles from './App.module.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Produtos from './components/produtos';
import Contato from './components/contato';
import Footer from './components/footer';
import anime from './components/animation.module.css';
import Item from './components/item.jsx';

const App = () => {
  return (
    <HashRouter>
      <div className={`${styles.content} ${anime.animation}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
