import './css/App.css'

import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import MembroFamilia from './components/basicos/MembroFamilia'

export default function App(){
    return(
        <div className="app">
            <h1>Fundamento React</h1>
            <div className="cards">
                <Card titulo="#05 - Componente com filhos" color="	#DA70D6">
                    <Familia sobrenome="Souza">
                        <MembroFamilia nome="Pedro"/>
                        <MembroFamilia nome="Ana"/>
                        <MembroFamilia nome="Gustavo" sobrenome="Ferreira"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio aleatorio" color="#080">
                    <NumeroAleatorio min={10} max={15}/>
                </Card>
                
                <Card titulo="#03 - Fragmento" color="#00BFFF">
                    <Fragmento/>    
                </Card>
            
                <Card titulo="#02 - Com parametro" color="#7FFFD4">
                    <ComParametro 
                        titulo="Situação do aluno" 
                        aluno="Pedro"
                        nota={9.3}/>
                </Card>

                <Card titulo="#01 - Primeiro componente" color="#FF00FF">
                    <Primeiro></Primeiro> 
                </Card>
            </div>
        </div>
    )
}