/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-31
 * Updated at: 2021-07-31
 */

import ListaDeNotas from "./components/ListaDeNotas.jsx"
import Form from "./components/Form.jsx"
import { Component } from "react";
import { notas } from "./data/notas.js"

class App extends Component {

    constructor(){
        super()

        this.state = {
            notas: notas // state inicial
        }
    }

    // metodo para criar nota atualizando o array de notas
    criarNota(titulo, descricao) {

        const novaNota = {nota: titulo, descricao}
        const novaListaNotas = [...this.state.notas, novaNota] //atualiza a lista de notas com spred operator
        const novoEstado = {notas: novaListaNotas} //atualizando estado

        // setando novo estado
        this.setState(novoEstado)
    }

    // render
    render() {
        return (
            <div className="container-fluid">
                <h2>Cadastro de notas com React</h2>

                <Form criarNota={this.criarNota.bind(this)} />
                <ListaDeNotas notas={this.state.notas} />
            </div>
        );
    }
}

export default App;