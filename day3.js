const area = prompt("Digite 1 se você quer seguir para a área de Front-End. Ou digite 2 se quer seguir para a área de Back-End.")

let linguagem = ""

if (area == 1) {
	linguagem = prompt("Quer aprender React ou aprender Vue?")
}

if (area == 2) {
	linguagem = prompt("Quer aprender C# ou aprender Java")

}

const proximoPasso = prompt("Digite 1 para continuar se especializando em " + linguagem + " ou digite 2 se deseja continuar se desenvolvendo para se tornar Fullstack")
if (proximoPasso == 1) {
	alert("Excelente! Continue estudando " + linguagem + " para se especializar!")
} else if (proximoPasso == 2) {
	alert("Ótimo! Boa sorte estudando novas linguagens!")
} else {
	alert("Informação inválida")
}

let plus = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 'ok'")

while (plus == 'ok'){
	let tecnologia = prompt("Qual tecnologia?")
	alert(tecnologia + " é excelente!")
	plus  = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 'ok'")
}