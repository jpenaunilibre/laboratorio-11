let calificacion = parseFloat(prompt("Ingrese su calificación"));
if (calificacion > 90){
    console.log("¡Aprobado con honores!");
    document.write("¡Aprobado con honores!")
}else if(calificacion >= 70) {
    console.log("¡Aprobado!");
    document.write("¡Aprobado!")
}else {
    console.log("Reprobado")
    document.write("Reprobado")
}