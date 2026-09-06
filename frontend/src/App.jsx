import { useState } from "react";

import Home from "../pages/Home/Home.jsx"
import Register from "../pages/Register/Register.jsx"
import Header from "./components/Header/Header.jsx"

import styles from "../src/App.module.css"

function App(){

    const [pagina, setPagina] = useState("home")

    return(

        <div className={styles.app}>
            <Header pagina={pagina} setPagina={setPagina} />

            {pagina === "home" && <Home />}
            {pagina === "register" && <Register />}
        </div>
    )
}

export default App