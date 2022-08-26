const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let acertou = false

for (let i = 0; i < 3; i++){
	let chute = prompt('Chute um número de 0 a 10')
	if (chute == numero){
		alert('Parabéns! Você acertou!!')
		acertou = true
		break;
	} else {
		alert('Errou!')
	}
}

if (!acertou){
	alert('O número certo era ' + numero)
}