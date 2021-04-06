import React from 'react'
import './TabelaProdutos.css'
import produtos from '../../data/produtos'



export default function Produtos (props) {

    const produtosTr = produtos.map((produto, i) =>{
        return(
            <tr key={produto.id} className={i % 2 === 0 ?'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })

    return(
        <div className="TabelaProdutos">
            Tabela Produtos
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTr}    
                </tbody>
            </table>
        </div>
    )


}