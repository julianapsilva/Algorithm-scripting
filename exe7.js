function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (minimo > maximo)
        [minimo, maximo] = [maximo, minimo]
    if (inclusivo && numero >= minimo && numero <= maximo)
        return true
    else if (!inclusivo && numero > minimo && numero < maximo)
        return true
    return false
}
//TESTES
//console.log(estaEntre(16, 100, 160))
//console.log(estaEntre(3, 150, 3, true))
//console.log(estaEntre(16, 100, 160))
//console.log(estaEntre(100, 100, 150, true))