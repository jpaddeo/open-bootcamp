class Persona {
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
    return this._telefono;
  }

  set telefono(telefono) {
    this._telefono = telefono;
  }
}

class Cliente extends Persona {
  get credito() {
    return this._credito;
  }
  set credito(credito) {
    this._credito = credito;
  }
}

class Trabajador extends Persona {
  get salario() {
    return this._salario;
  }
  set salario(salario) {
    this._salario = salario;
  }
}

const clienteObj = new Cliente();
clienteObj.edad = 30;
console.log(clienteObj.edad);
clienteObj.nombre = 'Juan';
console.log(clienteObj.nombre);
clienteObj.telefono = '123123123';
console.log(clienteObj.telefono);
clienteObj.credito = 1000;
console.log(clienteObj.credito);

const trabajadorObj = new Trabajador();
trabajadorObj.edad = 30;
console.log(trabajadorObj.edad);
trabajadorObj.nombre = 'Juan';
console.log(trabajadorObj.nombre);
trabajadorObj.telefono = '123123123';
console.log(trabajadorObj.telefono);
trabajadorObj.salario = 10000;
console.log(trabajadorObj.salario);
