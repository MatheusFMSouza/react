import React,{ useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>
                    <strong>{idade}</strong>
                </span>
                <span> {nerd? "Verdadeiro":"Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}