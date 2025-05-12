import React from 'react';
import styles from './produtos.module.css';
import anime from './animation.module.css';
import { Link } from 'react-router-dom';
import Head from './head.jsx';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) {
    return null;
  }

  return (
    <div className={`${styles.produtos} ${anime.animation}`}>
      <Head title="lista - produtos" description="lista de produtos" />
      {produtos.map((produto) => (
        <Link
          to={`/item/${produto.id}`}
          key={produto.id}
          className={styles.produtoBox}
        >
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <div className={styles.descricao}>
            <h2>{produto.nome}</h2>
            <span>{produto.preco}</span>
            <p>{produto.descricao}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
