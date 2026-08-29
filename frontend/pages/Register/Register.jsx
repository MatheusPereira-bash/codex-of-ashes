import MusicForm from "../../src/components/MusicForm/MusicForm.jsx"
import styles from "../Register/Register.module.css"

function Register(){

    return (
        <main className={styles.register}>
            <section className={styles.introduction}>
                <p className={styles.subtitle}>
                    NOVA MEMÓRIA
                </p>

                <h1>
                    Registrar <br />
                    A melodia.
                </h1>

                <p className={styles.description}>
                    Preserve as músicas que ecoaram pelas terras dos caídos.
                </p>
            </section>

            <section className={styles.formSection}>
                <div className={styles.formHeader}>
                    <p>
                        CODEX
                    </p>

                    <span>
                        RECORDAÇÃO No. 001
                    </span>
                </div>

                <MusicForm />
            </section>
        </main>
    )
}

export default Register;