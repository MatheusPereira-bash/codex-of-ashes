import { useState } from "react";
import styles from "./Home.module.css"
import MusicCard from "../../src/components/MusicCard/MusicCard.jsx"
import { listarMusica } from "../../services/api.js"

function Home() {

    const [musicas, setMusicas] = useState([]);
    const [mensagem, setMensagem] = useState("");

    async function buscarMusicas() {

        setMensagem("Carregando...");

        try {

            const resposta = await listarMusica();

            setMusicas(resposta.data);

            setMensagem("");

        } catch (erro) {

            console.log(erro);

            setMensagem("Erro ao carregar músicas");

        }
    }


    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.subtitle}>
                        ARQUIVO DOS CAIDOS
                    </p>

                    <h1>
                        Toda batalha <br />
                        tem um som
                    </h1>

                    <p className={styles.description}>
                        Explore as melodias que acompanharam os guerreiros por terras amaldiçoadas.
                    </p>

                    <button
                        className={styles.exploreButton}
                        onClick={buscarMusicas}
                    >
                        DESPERTAR MEMÓRIAS
                    </button>
                </div>
            </section>

            <section className={styles.codex}>
                <div className={styles.sectionHeader}>
                    <div>
                        <p className={styles.sectionSubtitle}>
                            OS ARQUIVOS
                        </p>

                        <h2>
                            Memórias Musicais
                        </h2>
                    </div>

                    <p className={styles.count}>
                        {musicas.length} MEMÓRIAS
                    </p>
                </div>

                <div className={styles.divider}></div>

                {mensagem && (
                    <p className={styles.message}>
                        {mensagem}
                    </p>
                )}

                <div className={styles.grid}>
                    {musicas.map((musica) => (
                        <MusicCard
                            key={musica.id}
                            musica={musica}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home;