/*
Exercícos de interpretação
"A": 
"b": array
"C": 10
"d": 0
"e": error
"f":error
Exercício 2
SUBA NUM ONIBUS EM MIRROCOS 27
*/
/*
1 ecrita de codigo
const NomeDoUsuario = prompt("Qual é seu nome")
const emailDoUsuario = prompt("qual é seu email") 

const frase = `O e-mail  ${emailDoUsuario} Cadastrado com sucesso Seja bem-vinda (o) ${NomeDoUsuario}`
console.log (frase) */
/*
const arreyListaDeComida = ["Frango", "Carne", "Arepa", "Pizaa", "Cachorro"]
console.log (arreyListaDeComida)
const comida = prompt ("qual é tua comida preferida")
arreyListaDeComida.splice(1,1,comida)
console.log (arreyListaDeComida)
*/


const ListadeTarefas = []
const Primera = prompt ("Primera tarefa")
const Segunda = prompt ("segunda tarefa")
const terça = prompt ("terça tarefa")
ListadeTarefas.push(Primera,Segunda,terça)
console.log (ListadeTarefas)
 const indice = prompt ("Digita um índice de uma tarefa")
 ListadeTarefas.splice(indice)
 console.log (ListadeTarefas)