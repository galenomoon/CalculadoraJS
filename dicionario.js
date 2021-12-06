//FINALMENTE VOU APRENDER ESSA BAGAÇA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

/*
// let é uma variavel que funcionará apenas para determinado bloco
let a = 10;
const b = "10";

console.log(a === b || typeof b == 'string');  

// == | comparação de valor
// === | comparação de valor e de TIPO de variável   
// !== | DIFERENTE
*/

// let cor = 'verde';
// if(cor === "verde")
// {
//     alert("Siga");
// }
// if(cor === "vermelho")
// {
//     alert("Pare");
// }


// let cor = 'v';

// switch(cor){
//     case "verde":
//         console.log("siga")
//         break;
//     case "amarelo":
//         console.log("atenção")
//         break;
//     case "verde":
//         console.log("pare")
//         break;    
//     default: alert("não sei")
// }

// // =======FOR================================================================
// let n = 5;
////Ponto de partida; ponto final; incremento a cada loop
// for(let i = 0; i <= 10; i++){
//     console.log(`${i} x ${n} = ${i*n}`);
// }
// alert('Cálculo Finalizado');

// // =======FUNÇÃO=============================================================

// // FUNCTION declara função
// // SOMA nomeia essa função
// // x1, x2 são como placeholders
// function soma (x1, x2){

//     // o que deve ser retornado em sua invocação
//     return x1 + x2;
// }
//     // atribuindo o resultado da FUNCTION a uma variável 
// let resultado = soma (1,2);
//     // resultado apresentado no console
// console.log (resultado)


//// =========CALCULADORA============================================================

// function calc(x1, x2, operator){
// //EVAL => é uma function que recebe o resultado da operação, e não sua resolução
//     return eval(`${x1} ${operator} ${x2}`);
// }

// let resultado = calc (1,2, "*");
// console.log(resultado);


// =============CALCULADORA=EM=ARROW=FUNCTION===========================================================
// ARROW FUNCTION | versão lite da FUNCTION, com MUITO MAIS RECURSO

/* ========== ESTRUTURA DO ARROW FUNCTION ========== */ //MDS QUE BGL LINDO MEU PAI....
// - SEM FUNCTION
// - declare a FUNCTION como sendo uma variáve (let, var, const)
// - declare os "PLACEHOLDERS" que serão utilizados
// - adicione uma SETA ("=>"") antes das chaves ("{}"")

// let calc = (x1, x2, operator) => 
// {return eval(`${x1} ${operator} ${x2}`);}
// let resultado = calc (1,2, "*");
// console.log(resultado);

// //======================== EVENTO ==========================
// // É TIPO C#, REPITO, É TIPO C# ^^
// // WINDOW | Manipulamos a Janela, a Aplicação
// // DOCUMENT | Manipulamos o Site
// // addEventListener | é tipo quando a gente quer que algo ocorra pelas propriedades do programa pelo WinForm tlgd?
// // addEventListener | Adicione uma ESCUTA para este EVENTO (Fica ligado pra quando rolar tal evento man '-')

// window.addEventListener('focus', event => {
//     //sinal no console para notar a percepção da aplicação
//     console.log('focus');
// });
// document.addEventListener('click', event => {
//     //sinal no console para notar a percepção do documento
//     console.log('click');
// });

// let agora = Date.now();
// console.log(agora);
// // resultado foi: 1638386273741
// // TIMESTAMP | Quantidade de segundos desde 01/01/1970

// let agora = new Date();
// console.log(agora.toLocaleDateString("pt-br"));
// // resultado: 01/12/2021

//==========================ARRAY=====================
// POSIÇÃO | fusca está na 2ª posição pois ARRAY conta a partir de 0
// ELEMENTOS | há três elementos neste array

// let array = ["chevette", "fusca", "camaro", 10, true, new Date(), function(){}];
// // Elemento da posição 2 declarada como variável
// console.log(`na segunda posição esté o: ${array[2]}`);
// // Elemento da posição 5 com um argumento
// console.log(array[5].toLocaleDateString("pt-br"));

// // FOREACH | LAÇO PARA PERCORRER OS ELEMENTOS DO ARRAY
// // VALUE = ELEMENTO
// // INDEX = POSIÇÃO
// array.forEach(function(value, index){
// console.log(value, index);    
// })
//======================== CLASSE ==========================
// CLASSE | (objeto) é um conjunto de atributos e métodos com o dever de englobar todos os assuntos em comum (é como um arquivo compactado)
// VARIAVEL = ATRIBUTO
// FUNCTION = MÉTODO
// THIS | Comando interno para se referenciar
// NEW | nova INSTÂCIA objeto representa uma classe (tipo uma variavel global)

////===old cass
// let celular = function(){
//     this.cor = "prata";
//     this.ligar = function(){

//         console.log("uma ligação");
//         return "ligando. . .";
//     }
// }
// let objeto = new celular();
// //console.log(objeto.cor);
// console.log(objeto.ligar());

////=== atualizado: cass


//declarar criação de classe
// class celular{  
//     //constrói o que há dentro da classe  
//     constructor(){
//         //this = atribua à esta classe
//         this.modelo = "J7 Neo"
//     }
//     // criando uma método
//     ligar(){
//         console.log("uma ligação")
//         return "ligando. . .";
//     }
// }
// // atribuindo tudo que há na classe à uma variável  
// let objeto = new celular();
// console.log(objeto);
// console.log(objeto.ligar());


//ARROW FUNCITON (()=>{})
// SET INTERVAL | EXECUTA EM INTERVALOS DETERMINADA AÇÃO