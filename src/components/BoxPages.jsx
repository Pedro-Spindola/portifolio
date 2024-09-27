import styles from './BoxPages.module.css'
import Principal from './Principal'
import Home from './Home'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Footer from './Footer'

function BoxPages() {
  return (
    <section className={styles.boxPages}>
      <Principal/>
      <Home/>
      <Sobre/>
      <Projetos/>
      <Footer/>
    </section>
  )
}

export default BoxPages