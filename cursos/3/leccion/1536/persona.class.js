class Persona {
    constructor() {
    }
    
  constructor(edad, nombre, telefono) {
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
  }

  get edad() {
    return this.edad;
  }

  set edad(edad) {
    this.edad = edad;
  }
  get nombre() {
    return this.nombre;
  }

  set nombre(nombre) {
    this.nombre = nombre;
  }

  get telefono() {
    return this.nombre;
  }

  set telefono(telefono) {
    this.telefono = telefono;
  }
}

const personaObj = new Persona();
personaObj.edad = 30;
console.log(personaObj.edad);
personaObj.nombre = "Juan";
console.log(personaObj.nombre);
personaObj.telefono = "123456";
console.log(personaObj.telefono);