import React from 'react'
import './mega.css'

export default function Mega(props) {

    function gerardorDeNumerosMegaSena (qtdDeNumeros) {
        let numerosGerados = []
        for(var cont =0; cont< qtdDeNumeros; cont ++){
            numerosGerados.push(recursivoGeradorDeNumero(numerosGerados))
        }
        let numeroOdernados = numerosGerados.sort((n1,n2) => n1 - n2)

        return montaTabela(numeroOdernados)
    }

    function montaTabela(numerosOrdenados){
        return numerosOrdenados.map((numero,  indice) =>{
                return(
                <tr key={indice} className={indice % 2 === 0 ?'Par' : 'Impar'}>
                    <td>{indice + 1}</td>
                    <td>{numero}</td>
                </tr>
            )
        })
    }
    
    function recursivoGeradorDeNumero (numerosGerados) {
        const min = 1
        const max = 60
        const numeroGerado = parseInt(Math.random() * (max - min)) + min
        return numerosGerados.includes(numeroGerado) ? recursivoGeradorDeNumero(numerosGerados) : numeroGerado
    }
    

    return(
        <div className="Mega">
            <h1>Numeros gerados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Indice</th>
                        <th>Numero</th>
                    </tr>
                </thead>
                <tbody>
                    {gerardorDeNumerosMegaSena(props.numero)}
                </tbody>
            </table>
            
        </div>
    )
}