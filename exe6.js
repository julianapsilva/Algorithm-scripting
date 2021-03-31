function inverso(valor) {
    if (typeof valor == "boolean")
        return !valor
    else if (typeof valor == "number")
        return -valor
    console.log("booleano ou número esperados, mas o parâmetro é do tipo ", typeof valor)
}

console.log(inverso(-2000))