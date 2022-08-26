function soma (a, b) {
	return Number(a) + Number(b)
}

function subtracao (a, b) {
	return Number(a) - Number(b)
}

function multiplicacao (a, b) {
	return Number(a) * Number(b)
}

function divisao (a, b) {
	return Number(a) / Number(b)
}

do {
	let operacao = prompt("Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.");	

	if (operacao == "sair") {
		break
	}

	let a = prompt('Insira o primeiro valor:')
	let b = prompt('Insira o segundo valor:')

	switch (operacao) {
		case "soma":
		alert(`O resultado da ${operacao} é ${soma(a, b)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(a, b)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(a, b)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(a, b)}`);
            break;

	}
} while (operacao == "soma" || operacao == "subtração" || operacao == "multiplicação" || operacao == "divisão")