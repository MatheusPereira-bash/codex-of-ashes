import { useState } from "react";

import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";

import styles from "../src/App.module.css"

function App(){
    const [pagina, setPagina] = useState("home");
    
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={styles.logo}>

                    <div>
                        <h1>CODEX OF ASHES</h1>
                        <p>Music from fallen kingdoms</p>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <button
                        className={pagina === "home" ? styles.active : ""}
                        onClick={() => setPagina("home")}

                    >
                        CODEX
                    </button>

                    <button 
                        className={pagina === "register" ? styles.active : ""}
                        onClick={() => setPagina("register")}
                    >
                        REGISTRAR
                    </button>
                </nav>
            </header>

            {pagina === "home" && <Home />}
            {pagina === "register" && <Register />}
        </div>
    );
}

export default App;