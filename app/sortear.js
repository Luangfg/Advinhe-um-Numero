const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)

}

console.log('Numero Secreto:', numeroSecreto)

/*BUSCANDO O VALOR MENOR E MAIOR*/
const elementoMenorValor = document.getElementById('menor-valor')/*MENOR VALOR*/
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')/*MAIOR VALOR*/
elementoMaiorValor.innetHTML = maiorValor