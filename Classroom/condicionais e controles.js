// Estrutura de Condição  - permite executar diferentes ações baseada em (verdadeiro ou falso)
// Operador Condicional ternario (3 Etapas,a  verificação logica - se for verdadeiro  apos o interrogação vem a mensagem e se nao for verdadeiro vem a mensagem do : )

let age = 18

console.log(age >= 18 //1 -  condição ou teste
     ? "Voce Pode Dirigir" // 2 - se verdadeiro
      : "Voce nao pode dirigir" //3 -  se falso
    )

    console.log(age < 18 ? 
        "Voce não pode Dirigir"
        : "Voce pode Dirigir"
    )
    //
// falsy  quando o valor é considerado false e TRUTHY quando é considerado verdadeiro em contexdo onde um boolean é obrigatorio ( condicionais e loops)

console.log ("####Exemplos de FALSE###")
console.log(false ? "Verdadeiro" : "falso")
console.log("" ? "Verdadeiro" : "falso")
console.log(0 ? "Verdadeiro" : "falso")
console.log(-0 ? "Verdadeiro" : "falso")
console.log(null ? "Verdadeiro" : "falso")
console.log(false ? "Verdadeiro" : "falso")
console.log(undefined ? "Verdadeiro" : "falso")
console.log(NaN ? "Verdadeiro" : "falso")


console.log ("###Exemplos de Verdadeiro###")
console.log(true ? "Verdadeiro" : "falso")
console.log({} ? "Verdadeiro" : "falso")
console.log([] ? "Verdadeiro" : "falso")
console.log(1 ? "Verdadeiro" : "falso")
console.log(3.23 ? "Verdadeiro" : "falso")
console.log("DAvid" ? "Verdadeiro" : "falso")
console.log( " " ?"Verdadeiro" : "falso")
console.log("0" ? "Verdadeiro" : "falso")
console.log("false" ? "Verdadeiro" : "falso")
console.log("-1" ? "Verdadeiro" : "falso")
console.log(Infinity ? "Verdadeiro" : "falso")
console.log(-Infinity ? "Verdadeiro" : "falso")

//

// Estrutura de condição IF (SE)

let hour = 11
if (hour <= 12 ){
console.log("Bom dia!")
}
if (hour <= 12)
    console.log("Bom dia")
    console.log("Seja bem vindo")
//

//  ELSE  ( SE NÂO)

let age1 = 22

if (age1 < 18){
    console.log("Voce não pode Dirigir ")
}
else{
    console.log(" Voce pode Dirigir")
}
// IF ELSE IF

let hour1 = 13
/*
if (hour1 <= 12){
    console.log("Bom dia")
}
else if (hour1 > 18){
    console.log("Boa  Noite")
}
else if (hour1 > 12) {
    console.log("Boa tarde")
}*/
if (hour1 <= 12){
    console.log("Bom dia")
}
else if(hour1 >12 && hour <=18) {
    console.log("Boa tarde")

}
else{
    console.log("Boa NOite")
}
