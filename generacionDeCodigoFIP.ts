//Integrantes: Santiago Casal y Gustavo Arias
/**
 * ? Vamos a crear un objeto Bicicleta
 */
interface Bicicleta {
  marca: string;
  rodado: number;
  tipoUso: string;
  color: string;
  tipoFrenos: string;
  velocidades: number;
  precio:number;
  mostrarInfo: () => void;
}

//constructor para inicializar las propiedades
const bici:Bicicleta = {
  marca:"Venzo",
  rodado: 29,
  tipoUso:"montain",
  color:"Rojo y blanco",
  tipoFrenos:"hidraulico",
  velocidades:24,
  precio: 450000,
  mostrarInfo() {
    console.log(`Bicicleta:
      Marca: ${this.marca}
      Rodado: ${this.rodado}
      Tipo de uso: ${this.tipoUso}
      Color: ${this.color}
      Tipo de frenos: ${this.tipoFrenos}
      Velocidades: ${this.velocidades}
      precio: ${this.precio}
      `);
  }
}




