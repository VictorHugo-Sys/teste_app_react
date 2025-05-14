import React from 'react';
import styles from './item.module.css';
import anime from './animation.module.css';
import { useParams } from 'react-router-dom';
import Head from './head.jsx';

const Item = () => {
  const { id } = useParams();

  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    async function fetchitem(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setItem(json);
      } catch {
        setErro('ocorreu um erro');
      } finally {
        setLoading(false);
      }
    }
    fetchitem(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <p>carregando</p>;
  if (erro) return <p>{erro}</p>;
  if (item === null) return null;

  return (
    <div className={`${styles.itemBox} ${anime.animation}`}>
      <Head title={`${item.id}`} description={`${item.id}`} />
      {item.fotos.map((foto) => {
        return <img key={foto.src} src={foto.src} alt={foto.titulo} />;
      })}
      <div className={styles.conteudo}>
        <h1>{item.nome}</h1>
        <span>{item.preco}</span>
        <p>{item.descricao}</p>
      </div>
    </div>
  );
};

export default Item;
