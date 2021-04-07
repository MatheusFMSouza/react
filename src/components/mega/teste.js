function gerarNumerosMegaSena(qtdDeNumeros){
    let numerosGerados = []
    for(var cont =0; cont< qtdDeNumeros; cont ++){
        numerosGerados.push(recursivoGeradorDeNumero(numerosGerados))
    }
    return numerosOrdenados(numerosGerados)
}

function numerosOrdenados(numerosGerados){
    return numerosGerados.sort(function(a,b){
        if(a>b) return 1
        if(a<b) return -1
        return 0
    })
}

function recursivoGeradorDeNumero(numerosGerados){
    const min = 1
    const max = 60
    const numeroGerado = parseInt(Math.random() * (max - min)) + min
    if(validarNumero(numerosGerados, numeroGerado)){
        recursivoGeradorDeNumero(numerosGerados)
    }else{
        return numeroGerado
    }
}

function validarNumero(numerosGerados, numero){
   return numerosGerados ? numerosGerados.find(numeroGerado => numeroGerado === numero)? true : false : false
}

console.log(gerarNumerosMegaSena(6))