package school.sptech.codex_ashes;

public class Musica {
    private Integer id;
    private String titulo;
    private String jogo;
    private String compositor;
    private String categoria;
    private String local;
    private String duracao;

    public Musica() {
    }

    public Musica(Integer id, String titulo, String jogo, String compositor, String categoria, String local, String duracao) {
        this.id = id;
        this.titulo = titulo;
        this.jogo = jogo;
        this.compositor = compositor;
        this.categoria = categoria;
        this.local = local;
        this.duracao = duracao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getJogo() {
        return jogo;
    }

    public void setJogo(String jogo) {
        this.jogo = jogo;
    }

    public String getCompositor() {
        return compositor;
    }

    public void setCompositor(String compositor) {
        this.compositor = compositor;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getDuracao() {
        return duracao;
    }

    public void setDuracao(String duracao) {
        this.duracao = duracao;
    }
}
