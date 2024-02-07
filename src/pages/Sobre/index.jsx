import styles from './Sobre.module.css'
import Meuavatar from './images/Meuavatar.jpg'
import html from './images/html.svg'
import css from './images/css.svg'
import javascript from './images/javascript.svg'
import react from './images/react.png'
import java from './images/java.svg'
import sql from './images/sql.png'

function Sobre(){
    return(
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={Meuavatar} alt="avatar" className={styles.avatar}/>
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p><span>Sou Ruan Pablo </span><br/>
                    <strong> Dev Front End</strong>
                    </p>
                    <p>Sou um estudante de Sistemas de informação.</p>
                    <p>Possuo uma grande estima pela programação web.</p>
                    <p>Não possuo espelicialização em uma tecnologia porem,<br/>
                     pusso o conhecimento basico em algumas linguaguens.</p>
                </div>
                
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={javascript} alt="Javascript" />
                    <img src={react} alt="React" />
                    <img src={java} alt="Java" />
                    <img src={sql} alt="sql" />
                </div>
            </div>
        </section>
    )
}

export default Sobre