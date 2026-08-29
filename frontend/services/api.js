import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export function listarMusica(){
    return api.get("/musicas")
}

export function cadastrarMusica(musica){
    return api.post("/musicas", musica)
}

export default api;