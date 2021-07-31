/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-31
 * Updated at: 2021-07-31
 */

import React, { Component } from "react"

class Form extends Component {

    constructor(props){
        super(props)

        this.titulo = ""
        this.descricao = ""
    }

    // metodo para atribuir titulo da nota
    titutoNota(event){
        this.titulo = event.target.value
    }

    // metodo para atribuir a descricao da nota
    descricaoNota(event){
        this.descricao = event.target.value
    }

    // salvar cadastro
    salvarCadastro(event){
        event.preventDefault()
        event.stopPropagation()

        this.props.criarNota(this.titulo, this.descricao) //executa o metodo criarNota do App
    }

    // render
    render(){
        return(
            <form onSubmit={this.salvarCadastro.bind(this)}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        name="nota"
                        type="text"
                        className="form-control"
                        placeholder="Título"
                        autoComplete="off"
                        required
                        onBlur={this.titutoNota.bind(this)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descrição da nota</label>
                    <textarea
                        name="descricao"
                        className="form-control"
                        rows="3"
                        placeholder="Escreva sua nota..."
                        autoComplete="off"
                        required
                        onBlur={this.descricaoNota.bind(this)}
                    />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary mb-3">Salvar</button>
                </div>
            </form>
        )
    }
}

export default Form