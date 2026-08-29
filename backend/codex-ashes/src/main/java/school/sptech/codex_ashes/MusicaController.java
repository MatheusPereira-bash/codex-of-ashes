package school.sptech.codex_ashes;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/musicas")
public class MusicaController {

    private final JdbcTemplate jdbcTemplate;

    public MusicaController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public ResponseEntity<List<Musica>> listar(){

        String sql = "SELECT * FROM musica";

        List<Musica> resultado = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Musica.class));

        return ResponseEntity.status(200).body(resultado);
    }

    @PostMapping()
    public ResponseEntity<Musica> cadastrar(@RequestBody Musica musica){

        if (musica.getCategoria() == null || musica.getCategoria().isEmpty() || musica.getCategoria().isBlank()){
            return ResponseEntity.status(400).build();
        }
        if (musica.getCompositor() == null || musica.getCompositor().isEmpty() || musica.getCompositor().isBlank()){
            return ResponseEntity.status(400).build();
        }
        if (musica.getJogo() == null || musica.getJogo().isEmpty() || musica.getJogo().isBlank()){
            return ResponseEntity.status(400).build();
        }
        if (musica.getLocal() == null || musica.getLocal().isEmpty() || musica.getLocal().isBlank()){
            return ResponseEntity.status(400).build();
        }
        if (musica.getTitulo() == null || musica.getTitulo().isEmpty() || musica.getTitulo().isBlank()){
            return ResponseEntity.status(400).build();
        }
        if (musica.getDuracao() == null || musica.getDuracao().isEmpty() || musica.getDuracao().isBlank()){
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO musica (categoria, compositor, jogo, local, titulo, duracao) VALUES (?,?,?,?,?,?)";

        KeyHolder holder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            statement.setString(1, musica.getCategoria());
            statement.setString(2, musica.getCompositor());
            statement.setString(3, musica.getJogo());
            statement.setString(4, musica.getLocal());
            statement.setString(5, musica.getTitulo());
            statement.setString(6, musica.getDuracao());

            return statement;

            }, holder);

        int idGerado = holder.getKey().intValue();

        musica.setId(idGerado);

        return ResponseEntity.status(201).body(musica);
    }
}
