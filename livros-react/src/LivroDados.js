import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/controleLivro';
import ControleEditora from './controle/controleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split('\n')
    };
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h1>Inclusão de Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo</label>
          <textarea
            id="resumo"
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (separados por linha)</label>
          <textarea
            id="autores"
            className="form-control"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <select
            id="editora"
            className="form-control"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
