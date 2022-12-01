class Persona {
  constructor(edad, nombre, telefono) {
    this._edad = edad;
    this._nombre = nombre;
    this._telefono = telefono;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get telefono() {
    return this._nombre;
  }

  set telefono(telefono) {
    this._telefono = telefono;
  }
}

const personaObj = new Persona();
personaObj.edad = 30;
console.log(personaObj.edad);
personaObj.nombre = 'Juan';
console.log(personaObj.nombre);
personaObj.telefono = '123456';
console.log(personaObj.telefono);
