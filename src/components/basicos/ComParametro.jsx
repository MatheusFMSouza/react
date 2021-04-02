import React from 'react'

export default function ComParametro(props) {
    const {titulo, aluno, nota} = props
    const status = nota >= 7 ? 'Aprovado' : 'Recuperação'
    
    return (
        <div>
            <h2>{titulo}</h2>
            <h3>
                <strong>{aluno} </strong>
                tem nota :
                <strong> {nota} </strong>
                e está
                <strong> {status} </strong>
            </h3>
        </div>
    )
}