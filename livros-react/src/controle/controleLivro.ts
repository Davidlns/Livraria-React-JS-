import Livro from '../modelo/Livro';

class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      new Livro(1, 101, "Harry Potter", "Harry descobre que é um bruxo, entra em Hogwarts e enfrenta Voldemort pelo poder da Pedra Filosofal.", ["J.K. Rowling", "Jhon Jhones"]),
      new Livro(2, 102, "Livro B", "Resumo do Livro B", ["Autor B1"]),
      new Livro(3, 103, "Livro C", "Resumo do Livro C", ["Autor C1", "Autor C2", "Autor C3"])
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
