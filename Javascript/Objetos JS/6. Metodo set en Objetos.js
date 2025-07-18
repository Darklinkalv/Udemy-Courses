let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "alalalal",
    edad: 30,
    idioma: "es_mx",
    get lang()
    {
        return this.idioma.toUpperCase();
    },
    set lang(lang)
    {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.lang);
console.log(persona.idioma);

persona.lang = "en_us";
console.log(persona.lang);
console.log(persona.idioma);