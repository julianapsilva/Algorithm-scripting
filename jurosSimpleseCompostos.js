const jurosSimples = (capInicial, juros, tempo) => {
    return capInicial+ (juros*capInicial)*tempo
}

const jurosCompostos = (capInicial, juros, tempo) => {
    let resultado = capInicial;
    for(let i = 0; i < tempo ; i++){
        resultado += juros*resultado
    }
    return resultado.toFixed(2)
}

console.log(jurosCompostos(5000, 1/100 , 120))
console.log(jurosSimples(1000, 1/100, 5))