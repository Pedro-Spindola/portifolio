import styles from "./Projetos.module.css"
import Container from "./Container"
import Card from "./Card"
import Foto from "../assets/perfil.jpg"

const Projetos = () => {

  return (
    <section className={styles.projetos}>
      <Container className={styles.container}>
        <h1 className={styles.tituloProjeto}>PROJETOS</h1>
        <div className={styles.boxProjetos}>
          <div className={styles.boxUnicoProjeto}>
            <Card className={styles.card} foto={Foto} nome="Projeto 01" comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dapibus lorem. Fusce quis nisl venenatis, molestie turpis a, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam viverra, magna non mollis dictum, justo tellus vestibulum nulla, in commodo nulla enim in dolor. Duis id rhoncus risus." linkGit="" linkPage=""/>
          </div>
          <div className={styles.boxUnicoProjeto}>
            <Card className={styles.card} foto={Foto} nome="Projeto 02" comentario="Maecenas vitae quam eu quam rutrum maximus tempor quis nisi. Aliquam eget arcu ac urna viverra interdum sit amet nec nulla. Nulla sit amet orci in nunc euismod consequat. Orci varius natoque penatibus et magnis dis parturient montes." linkGit="" linkPage=""/>
          </div>
          <div className={styles.boxUnicoProjeto}>
            <Card className={styles.card} foto={Foto} nome="Projeto 03" comentario="Suspendisse accumsan, ligula quis maximus consectetur, felis sem gravida turpis, nec facilisis nisl lorem sit amet odio. Curabitur et consectetur leo. In laoreet eros arcu, vitae lobortis quam venenatis id. Phasellus vitae eros placerat, placerat dui eget, commodo sem. Morbi convallis purus tincidunt, ornare lacus eu, sagittis enim. Phasellus vitae ultricies urna." linkGit="" linkPage=""/>
          </div>
          <div className={styles.boxUnicoProjeto}>
            <Card className={styles.card} foto={Foto} nome="Projeto 04" comentario="Integer ut dui non sem vehicula aliquam non ac lacus. Cras fringilla velit consectetur sem pulvinar, ut hendrerit diam malesuada. Nullam eu ligula mollis, congue augue at, accumsan purus. Praesent varius elit urna, vitae eleifend justo facilisis a. Mauris justo est, iaculis in fermentum vehicula, vestibulum feugiat risus. Aliquam non convallis velit. Maecenas hendrerit et velit quis venenatis. Donec laoreet arcu a rutrum molestie." linkGit="" linkPage=""/>
          </div>
        </div>
      </Container>
    </section>
  );
};


export default Projetos