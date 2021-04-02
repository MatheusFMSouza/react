export default function NumeroAleratorio (props){
    const {min, max} = props
    const numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
    
    return(
        <div>
            <h2>Valor aleatorio</h2>
            <p>
                <strong>Valor minimo: </strong>{min}
            </p>
            <p>
                <strong>Valor minimo: </strong>{max}
            </p>
            <p>
                <strong>Resultado encontrado: </strong>{numeroAleatorio}
            </p>
            
        </div>
    )
}