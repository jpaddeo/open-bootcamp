class Coche {
  puertas = 0;

  incrementarPuertas() {
    this.puertas++;
  }

  showPuertas() {
    return this.puertas;
  }
}

const miCoche = new Coche();
miCoche.incrementarPuertas();
miCoche.incrementarPuertas();
miCoche.incrementarPuertas();

console.log(miCoche.showPuertas());
