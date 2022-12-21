import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastrarLivros from "./componentes/CadastrarLivros";
import Menu from "./componentes/Menu";
import TabelaLivros from "./componentes/TabelaLivros";
import NotFound from "./componentes/NotFound";
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
  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route
            exact
            path="/"
            render={() => <TabelaLivros livros={this.state.livros} />}
          />
          <Route exact path="/cadastrar" render={() => <CadastrarLivros />} />
          <Route Component={NotFound} />
        </Routes>
      </Router>
    );
  }
}

export default App;
