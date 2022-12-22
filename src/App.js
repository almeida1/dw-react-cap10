import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastrarLivros from "./componentes/CadastrarLivros";
import Menu from "./componentes/Menu";
import TabelaLivros from "./componentes/TabelaLivros";
import NotFound from "./componentes/NotFound";

import "./index.css";
import { Navigate } from "react-router-dom";
class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML5 - 2ª Edição",
        autor: "Maurício Samy Silva",
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno",
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das Coisas para Desenvolvedores",
        autor: "Ricardo da Silva Ogliari",
      },
    ],
  };
  inserirLivro = (livro) => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro],
    });
  };
  editarLivro = (livro) => {
    const index = this.state.livros.findIndex((p) => p.id === livro.id);
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
    this.setState({
      livros: newLivros,
    });
  };
  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route
            exact
            path="/"
            element={<TabelaLivros livros={this.state.livros} />}
          />
          <Route
            exact
            path="/cadastrar"
            render={
              <CadastrarLivros
                inserirLivro={this.inserirLivro}
                livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
              />
            }
          />
          <Route
            exact={true}
            path="/editar/:isbnLivro"
            element={
              <CadastrarLivros
                editarLivro={this.editarLivro}
                livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
              />
            }
          />
          <Route component={NotFound} />
        </Routes>
      </Router>
    );
  }
}

export default App;
