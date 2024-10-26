import Livro from '../modelo/Livro';

class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      new Livro(1, 101, "Livro A", "Resumo do Livro A", ["Autor A1", "Autor A2"]),
      new Livro(2, 102, "Livro B", "Resumo do Livro B", ["Autor B1"]),
      new Livro(3, 103, "Livro C", "Resumo do Livro C", ["Autor C1", "Autor C2", "Autor C3"])
    ];
  }

  obterLivros(): Array<Livro> {
    console.log('Obtendo livros:', this.livros); // Log para verificar a lista de livros
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0);
    livro.codigo = maxCodigo + 1;
    console.log('Livro incluído com código:', livro.codigo); // Verifique o código do novo livro
    this.livros.push(livro);
    console.log('Lista de livros atualizada:', this.livros); // Verifique a lista atualizada de livros
  }
  

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
