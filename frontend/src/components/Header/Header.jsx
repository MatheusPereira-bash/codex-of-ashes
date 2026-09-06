import styles from "./Header.module.css"

function Header(props){

    return (

        <header className={styles.header}>
            <div className={styles.brand}>
                <div>
                    <h1>CODEX OF ASHES</h1>
                    <p>Music from fallen kingdoms</p>
                </div>
            </div>

            <nav className={styles.nav}>
                <button
                    className={props.pagina === "home" ? styles.active : ""}
                    onClick={() => props.setPagina("home")}
                >
                    Codex
                </button>

                <button
                    className={props.pagina === "register" ? styles.active : ""}
                    onClick={() => props.setPagina("register")}
                >
                    Gravar Memória
                </button>
            </nav>
        </header>
    )
}

export default Header