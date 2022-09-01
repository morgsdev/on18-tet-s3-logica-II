function imprimir (){
    let nomeAluna = "Adriana"
    return console.log(`Meu nome é ${nomeAluna}`);
}

//ou

function imprimirDois(nomeAluna){
    return console.log(`o nome da aluna é ${nomeAluna}`);
}

function calcularMedia (numero1, numero2){
    let soma = numero1 + numero2
    let media = soma / 2
    return console.log(soma, media);
}

imprimir()
imprimirDois("Adriana")
imprimirDois("Gabriela")
calcularMedia(4, 6)
calcularMedia(9, 7)

function nome (){
    return
}

//arrow function:
() => {

}

let somar = (numero1, numero2) => {
    let soma = numero1 + numero2
    let media = soma / 2
    return console.log(media);
}

somar (2, 4)
