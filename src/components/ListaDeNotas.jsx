/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-31
 * Updated at: 2021-07-31
 */

import { React, Component } from "react"

class ListaDeNotas extends Component {

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.notas.map((nota, index) => {
                        return (
                            <tr key={index}>
                                <td>{nota.nota}</td>
                                <td>{nota.descricao}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default ListaDeNotas