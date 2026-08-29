import { useState } from "react";
import styles from "../MusicForm/MusicForm.module.css";
import api, { cadastrarMusica } from "../../../services/api.js"

function MusicForm() {

    const [titulo, setTitulo] = useState("");
    const [jogo, setJogo] = useState("");
    const [compositor, setCompositor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [local, setLocal] = useState("");
    const [duracao, setDuracao] = useState("");

    const [mensagem, setMensagem] = useState("");

    async function cadastrar(evento) {

        evento.preventDefault();

        const musica = {
            titulo: titulo,
            jogo: jogo,
            compositor: compositor,
            categoria: categoria,
            local: local,
            duracao: duracao
        };

        try{


        await cadastrarMusica(musica)
            .then(() => {
                setMensagem("Música cadastrada com sucesso")
            })

        setTitulo("");
        setJogo("");
        setCompositor("");
        setCategoria("");
        setLocal("");
        setDuracao("");

    } catch (erro) {
        setMensagem("Erro ao cadastrar música");
    };
}

return (

    <form
        className={styles.form}
        onSubmit={cadastrar}
    >

        <div className={styles.field}>
            <label>
                TITULO
            </label>

            <input
                type="text"
                value={titulo}
                onChange={(evento) => {
                    setTitulo(evento.target.value);
                }}
                placeholder="Ex: Soul of Cinder"
            />
        </div>

        <div className={styles.field}>

            <label>
                JOGO
            </label>

            <input
                type="text"
                value={jogo}
                onChange={(evento) => {
                    setJogo(evento.target.value);
                }}
                placeholder="Ex: Dark Souls III"
            />
        </div>

        <div className={styles.field}>

            <label>
                COMPOSITOR
            </label>

            <input
                type="text"
                value={compositor}
                onChange={(evento) => {
                    setCompositor(evento.target.value);
                }}
                placeholder="Ex: Yuka Kitamura"
            />
        </div>

        <div className={styles.field}>

            <label>
                CATEGORIA
            </label>

            <select
                value={categoria}
                onChange={(evento) => {
                    setCategoria(evento.target.value);
                }}
                placeholder="Ex: Yuka Kitamura"
            >

                <option value="">
                    Selecione a categoria
                </option>

                <option value="Boss Theme">
                    Luta de Chefe
                </option>

                <option value="Location">
                    Localização
                </option>

                <option value="Menu">
                    Menu
                </option>

                <option value="Ending">
                    Final
                </option>

            </select>
        </div>

        <div className={styles.field}>
            <label>
                BOSS / LOCALIZAÇÃO
            </label>

            <input
                type="text"
                value={local}
                onChange={(evento) => {
                    setLocal(evento.target.value);
                }}
                placeholder="Ex: Kiln of the First Flame"
            />
        </div>

        <div className={styles.field}>

            <label>
                DURAÇÃO
            </label>

            <input
                type="text"
                value={duracao}
                onChange={(evento) => {
                    setDuracao(evento.target.value);
                }}
                placeholder="Ex: 03:42"
            />

        </div>

        <button
            className={styles.button}
            type="submit"
        >

            ESCREVER NO CODEX
        </button>

        {mensagem && (<p>{mensagem}</p>)}

    </form>
);
    }

export default MusicForm;