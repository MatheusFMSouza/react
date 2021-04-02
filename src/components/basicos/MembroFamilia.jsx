import React from 'react'

export default function MembroFamilia( props){
    const { nome, sobrenome} = props
    return(
        <div>
            <span>{ nome } <strong>{ sobrenome }</strong></span>
        </div>
    )
}