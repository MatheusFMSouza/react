import './css/App.css'

import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import MembroFamilia from './components/basicos/MembroFamilia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProduto from './components/repeticao/TabelaProduto'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import ContadorComponent from './components/contador/ContadorComponent'



export default function App(){
    return(
        <div className="app">
            <h1>Fundamento React</h1>
            <div className="cards">
                <Card titulo="#13 - Contador Componentizado (input)" color="#FF4C65">  
                    <ContadorComponent numeroInicial={10}></ContadorComponent>
                </Card>

                <Card titulo="#12 - Contador (input)" color="#FF4C65">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#11 - Componente controlado (input)" color="#FF4C65">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação indireta" color="#FF4C65">
                    <IndiretaPai></IndiretaPai>
                </Card>
                
                <Card titulo="#09 - Comunicação direta" color="#FF4C65">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Condicional renderização" color="#FF4C65">
                    <UsuarioInfo usuario={{ nome:'Matheus' }}/>
                    <ParOuImpar numero={20}></ParOuImpar>
                </Card>

                <Card titulo="#07 - Tabela e Repetições" color="#FF4C65">
                    <TabelaProduto></TabelaProduto>
                </Card>

                <Card titulo="#06 - Repetições" color="	#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

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