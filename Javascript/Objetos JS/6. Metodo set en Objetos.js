let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "alalalal",
    edad: 30,
    idioma: "ES_MX",
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

persona.lang = "EN_US";
console.log(persona.lang);