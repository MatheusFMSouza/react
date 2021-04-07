import React, {Component} from 'react'
import './contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'


class Contador extends Component{


    constructor(props){
        super(props)

        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5       
        }
        // this.inc = this.inc.bind(this)
    }
   
    inc = (e) => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
        console.log(e.target.value)
    }
    
    dec = (e) => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
        console.log(e.target.value)
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }


    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc}  setDec={this.dec}></Botoes>
                {/* <p>Valor inicial: {this.props.numeroInicial}</p> */}
            </div>
        )
    }

}


export default Contador