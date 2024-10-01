import styles from "./Projetos.module.css"
import Container from "./Container"
import Card from "./Card"
import Foto from "../assets/perfil.jpg"
import NextGen from "../assets/ProjetoNextGen.jpg"
import MiniGame from "../assets/ProjetoMiniJogos.jpg"
import CocaCola from "../assets/ImagemProjetoCocaCola.jpg"
import React, { useState } from 'react';

const Projetos = () => {
  const [projetoAtivo, setProjetoAtivo] = useState(0);

  const projetos = [
    { numero: "01", nome: "NEXTGEN DESIGN", foto: NextGen, comentario: "NextGen Design é uma landing page dedicada à mentoria em design, criada para apresentar informações essenciais sobre o serviço. Utilizando React e CSS-in-JS, desenvolvi uma interface clean e responsiva, focada na experiência do usuário. A página inclui detalhes sobre a mentoria, depoimentos de usuários e um formulário de contato, facilitando a conexão entre aspirantes a designers e mentores. Este projeto reflete minhas habilidades em front-end e meu interesse em apoiar o crescimento da comunidade de design.", linkGit: "https://github.com/Pedro-Spindola/nextgen_Design", linkPage: "https://pedro-spindola.github.io/nextgen_Design/"},
    { numero: "02", nome: "MINI-JOGOS", foto: MiniGame, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque.", linkGit: "", linkPage: ""},
    { numero: "03", nome: "LANDING PAGE - COCA COLA", foto: CocaCola, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque.", linkGit: "", linkPage: ""},
    { numero: "04", nome: "PROJETO 04", foto: Foto, comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id odio auctor, semper sem auctor, ullamcorper urna. Etiam eleifend fermentum quam, quis sodales tortor tincidunt id. Nunc vestibulum ullamcorper feugiat. Donec orci arcu, placerat quis leo sit amet, aliquam eleifend massa. Maecenas ornare felis quis neque faucibus, eu semper nisi ornare. Integer rhoncus nec augue ac cursus. Nullam blandit non purus sit amet vulputate. Donec euismod metus sed hendrerit sagittis. Fusce dictum ut erat quis iaculis. Etiam venenatis quam at elit porttitor facilisis. Ut lobortis hendrerit scelerisque.", linkGit: "", linkPage: "" }
  ];

  return (
    <section className={styles.projetos} id="projeto">
      <Container className={styles.container}>
        <h1 className={styles.tituloProjeto}>Projetos</h1>
        <div className={styles.lineBoxProjetos}>
          {projetos.map((projeto, index) => (
            <React.Fragment key={projeto.numero}>
              <div className={`${styles.selectProjeto} ${index === 0 ? styles.selectProjeto1 : index === 1 ? styles.selectProjeto2 : index === 2 ? styles.selectProjeto3 : ''}`} onClick={() => setProjetoAtivo(index)}>
                <h1 className={styles.h1NumeroProjeto}>{projeto.numero}</h1>
                <h1 className={styles.h1NomeProjeto}>{projeto.nome}</h1>
              </div>
              <div className={`${styles.projetoAtivo} ${projetoAtivo === index ? styles.select : ''}`}>
                <Card 
                  className={styles.card} 
                  foto={projeto.foto} 
                  numeroProjeto={projeto.numero} 
                  nome={projeto.nome} 
                  comentario={projeto.comentario} 
                  linkGit={projeto.linkGit} 
                  linkPage={projeto.linkPage} 
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