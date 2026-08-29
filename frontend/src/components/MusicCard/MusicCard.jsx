import styles from "./MusicCard.module.css";

function MusicCard({ musica }) {

    return (
        <article className={styles.card}>

            <div className={styles.header}>

                <span className={styles.category}>
                    {musica.categoria}
                </span>

            </div>

            <h3>
                {musica.titulo}
            </h3>

            <p className={styles.jogo}>
                {musica.jogo}
            </p>

            <div className={styles.divider}></div>

            <div className={styles.info}>

                <p>
                    <span>COMPOSITOR</span>
                    {musica.compositor}
                </p>

                <p>
                    <span>DURAÇÃO</span>
                    {musica.duracao}
                </p>

                <p>
                    <span>LOCAL / MEMÓRIA</span>
                    {musica.local}
                </p>

            </div>

        </article>
    );
}

export default MusicCard;