import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home(){
    return(
        <>
          <section className={styles.home}>
            <div className={styles.apresentacao}>
              <p>
                Ola, sou<br/>
                <span>Ruan pablo</span><br/>
                Dev Front End <br />
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`}>
                  Saiba mais sobre mim
                </Link>
              </p>
            </div>
            <figure>
              <img src="https://avatars.githubusercontent.com/u/84604165?s=400&u=c83f8b16b8777f82079a4bb13856d0ccf240835d&v=4" alt="imagem da Home" />
            </figure>
          </section>
        </>
    )
}

export default Home