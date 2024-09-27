import styles from './Contato.module.css'
import Container from './Container'
import ButtonEnviarEmail from './ButtonEnviarEmail'
import ButtonRedesSocias from './ButtonRedesSocias'

import WhastApp from '../assets/whatsApp.svg'
import Linkedin from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'
import Site from '../assets/site.svg'
import GitHub from '../assets/github_w.svg'

function Contato() {
  return (
    <section className={styles.contato}>
      <Container className={styles.container}>
        <h1 className={styles.tituloH1}>Entre em contato!!!</h1>
        <div className={styles.formEmail}>
            <input className={styles.inputText} type="text" name="nome" placeholder="Seu nome..."/>
            <input className={styles.inputEmail} type="email" name="nome" placeholder="Seu e-mail..."/>
            <input className={styles.inputTelefone} type="tel" name="nome" placeholder="Seu telefone..."/>
            <textarea className={styles.textarea} placeholder="Sua Mensagem aqui!"></textarea>
            <ButtonEnviarEmail/>
        </div>
        <div className={styles.boxRedeSocias}>
          <h1 className={styles.redeSociasH1}>Minhas redes socias</h1>
          <div className={styles.boxBtnRedeSocias}>
            <ButtonRedesSocias setStyles={styles.btnBoxA} setStylesH2={styles.btnTextH2WhatsApp} icon={WhastApp} link="" texto="WhatsApp"/>
            <ButtonRedesSocias setStyles={styles.btnBoxA} setStylesH2={styles.btnTextH2GitHub} icon={GitHub} link="" texto="GitHub"/>
            <ButtonRedesSocias setStyles={styles.btnBoxA} setStylesH2={styles.btnTextH2Linkedin} icon={Linkedin} link="" texto="Linkedin"/>
            <ButtonRedesSocias setStyles={styles.btnBoxA} setStylesH2={styles.btnTextH2Instagram} icon={Instagram} link="" texto="Instagram"/>
            <ButtonRedesSocias setStyles={styles.btnBoxA} setStylesH2={styles.btnTextH2Site} icon={Site} link="" texto="Web Site"/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contato