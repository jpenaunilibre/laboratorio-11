let num = Math.floor(Math.random() * 10) + 1;

let adivina = prompt("Adivina un número entre 1 y 10");

if(adivina == num){
    document.write("¡Felicidades, adivinaste el número!");
} else{
    document.write("Lo siento, el número era ", num);
}