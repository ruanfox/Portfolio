import styles from './Page404.module.css'

function Page404(){
    return(
        <section>
            <h2 className={styles.titulo2}>
                Algo de errado não esta certo!
            </h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span>
                <strong className={styles.texto_azul}>Pagina não localizada!</strong>
            </div>
        </section>
    )
}

export default Page404