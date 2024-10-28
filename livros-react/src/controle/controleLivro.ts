import Livro from '../modelo/Livro';

class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      new Livro(1, 101, "Harry Potter livro 1", "Harry descobre que é um bruxo, entra em Hogwarts e enfrenta Voldemort pelo poder da Pedra Filosofal.", ["J.K. Rowling", "Jhon Jhones"]),
      new Livro(2, 102, "Cronicas de Gelo e Fogo", "Uma dispulta sanguinária por um trono poderoso numa época onde os dragões reinam", ["George R.R. Martin"]),
      new Livro(3, 103, "É assim que termina", "Um romance épico e a história de uma mulher incrível", ["Colen houven", "Bill jackson", "Jordan Pane"])
    ];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  excluir(codEditora: number): void {
    this.livros = this.livros.filter(livro => livro.codEditora !== codEditora);
  }
}

export default ControleLivros;
