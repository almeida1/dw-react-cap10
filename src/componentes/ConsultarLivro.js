import CadastrarLivros from "./CadastrarLivros";
export default function Parent() {
  return (
    <div>
      <CadastrarLivros
        editarLivro={this.editarLivro}
        livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
      />
    </div>
  );
}
