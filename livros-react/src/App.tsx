import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand text-white" to="/">Livraria</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Lista de Livros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dados">Dados do Livro</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
