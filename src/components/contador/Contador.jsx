import React, {Component} from 'react'
import './contador.css'

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
    setPasso = (event) => {
        this.setState({
            passo: +event.target.value,
        })
    }


    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                {/* <p>Valor inicial: {this.props.numeroInicial}</p> */}
            </div>
        )
    }

}


export default Contador