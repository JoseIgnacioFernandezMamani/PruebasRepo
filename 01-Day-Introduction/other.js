let student = {
    nombre: "María",
    edad: 25,
    universidad: {
        nombre: "Universidad de Madrid",
        ubicacion: "Madrid"
    }
};
console.log(typeof student);


Object.keys(student).forEach(function(clave) {
    console.log(clave + ": " + student[clave]);
});
