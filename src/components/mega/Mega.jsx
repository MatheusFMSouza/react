import React from 'react'
import './mega.css'

export default function Mega(props) {

    function gerardorDeNumerosMegaSena (qtdDeNumeros) {
        let numerosGerados = []
        for(var cont =0; cont< qtdDeNumeros; cont ++){
            numerosGerados.push(recursivoGeradorDeNumero(numerosGerados))
        }
        let numeroOdernados = numerosGerados.sort(function(a,b){
                                            if(a>b) return 1
                                            if(a<b) return -1
                                            return 0
                                        })

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
        if(validarNumero(numerosGerados, numeroGerado) && !numeroGerado){
            recursivoGeradorDeNumero(numerosGerados)
        }else{
            return numeroGerado
        }
    }
    
    function validarNumero (numerosGerados, numero) {
       return numerosGerados ? numerosGerados.find(numeroGerado => numeroGerado === numero)? true : false : false
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