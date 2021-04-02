import React from 'react'


export default function Familia(props){


    return(
        <div>
            {props.children.map((child, indice) =>{
                return React.cloneElement(child, {...props, key: indice})
            })}
        </div>

    )
}