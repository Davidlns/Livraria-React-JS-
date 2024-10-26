import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/controleLivro';
import ControleEditora from './controle/controleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>
        {livro.titulo}
        <button className="table-button" onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  
  useEffect(() => {
    setLivros(controleLivro.obterLivros());
  },[livros]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setLivros(controleLivro.obterLivros()); // Força o redesenho da página com lista atualizada
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
