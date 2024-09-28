import styles from "./Projetos.module.css"
import Container from "./Container"
import Card from "./Card"
import Foto from "../assets/perfil.jpg"
import React, { useState } from 'react';

const Projetos = () => {
  const [projetoAtivo, setProjetoAtivo] = useState(0);

  const projetos = [
    { numero: "01", nome: "PROJETO 01", foto: Foto, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque." },
    { numero: "02", nome: "PROJETO 02", foto: Foto, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque." },
    { numero: "03", nome: "PROJETO 03", foto: Foto, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque." },
    { numero: "04", nome: "PROJETO 04", foto: Foto, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque." }
  ];

  return (
    <section className={styles.projetos}>
      <Container className={styles.container}>
        <h1 className={styles.tituloProjeto}>Projetos</h1>
        <div className={styles.lineBoxProjetos}>
          {projetos.map((projeto, index) => (
            <React.Fragment key={projeto.numero}>
              <div className={styles.selectProjeto} onClick={() => setProjetoAtivo(index)}>
                <h1 className={styles.h1NumeroProjeto}>{projeto.numero}</h1>
                <h1 className={styles.h1NomeProjeto}>{projeto.nome}</h1>
              </div>
              <div className={`${styles.projetoAtivo} ${projetoAtivo === index ? styles.select : ''}`}>
                <Card 
                  className={`${styles.card} ${projetoAtivo === index ? styles.select : ''}`} 
                  foto={projeto.foto} 
                  numeroProjeto={projeto.numero} 
                  nome={projeto.nome} 
                  comentario={projeto.comentario} 
                  linkGit="" 
                  linkPage=""
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};



export default Projetos