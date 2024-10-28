import Editora from '../modelo/Editora';

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      new Editora(101, "Penguin Random House"),
      new Editora(102, "HarperCollins"),
      new Editora(103, "Hachette Livre")
    ];
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}

export default ControleEditora;
