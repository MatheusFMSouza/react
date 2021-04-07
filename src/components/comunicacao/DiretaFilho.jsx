import React from 'react'

export default props =>{
    return (
        <div>
            <span>{props.texto} </span>
            <strong>
                <span>{props.numero} </span>
            </strong>
            <span>{props.bool ? "Verdadeiro":"Falso"}</span>
        </div>
    )
}