class Musica {
    constructor(public titulo: string, public artista: string, public duracao: number) {}
}

class BibliotecaMusical {
    private musicas: Musica[] = [];

    adicionarMusica(musica: Musica) {
        this.musicas.push(musica);
    }

    listarMusicas() {
        console.log("Músicas na biblioteca:");
        this.musicas.forEach((musica, index) => {
            console.log(`${index + 1}. Título: ${musica.titulo}, Artista: ${musica.artista}, Duração: ${musica.duracao} segundos`);
        });
    }

    calcularDuracaoTotal() {
        const duracaoTotal = this.musicas.reduce((total, musica) => total + musica.duracao, 0);
        console.log(`Duração total de todas as músicas: ${duracaoTotal} segundos`);
        return duracaoTotal;
    }

    reproduzirMusica(index: number) {
        if (index >= 0 && index < this.musicas.length) {
            console.log(`Reproduzindo: ${this.musicas[index].titulo} - ${this.musicas[index].artista}`);
        } else {
            console.log("Índice de música inválido.");
        }
    }
}

class Usuario {
    private biblioteca: BibliotecaMusical;

    constructor(public nome: string) {
        this.biblioteca = new BibliotecaMusical();
    }

    adicionarMusica(musica: Musica) {
        this.biblioteca.adicionarMusica(musica);
    }

    listarMusicas() {
        this.biblioteca.listarMusicas();
    }

    reproduzirMusica(index: number) {
        this.biblioteca.reproduzirMusica(index);
    }
}

// Exemplo de uso:
const musica1 = new Musica("A Vida é Bela", "Fresno", 240);
const musica2 = new Musica("Shape of You", "Ed Sheeran", 234);
const musica3 = new Musica("Bohemian Rhapsody", "Queen", 355);

const usuario1 = new Usuario("Alice");
usuario1.adicionarMusica(musica1);
usuario1.adicionarMusica(musica2);

const usuario2 = new Usuario("Bob");
usuario2.adicionarMusica(musica2);
usuario2.adicionarMusica(musica3);

usuario1.listarMusicas();
usuario1.reproduzirMusica(0);

usuario2.listarMusicas();
usuario2.reproduzirMusica(1);

const bibliotecaGeral = new BibliotecaMusical();
bibliotecaGeral.adicionarMusica(musica1);
bibliotecaGeral.adicionarMusica(musica2);
bibliotecaGeral.adicionarMusica(musica3);

bibliotecaGeral.listarMusicas();
bibliotecaGeral.calcularDuracaoTotal();
