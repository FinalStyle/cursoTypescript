interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    pais: string;
    ciudad: string;
  };
}

const aaa: SuperHeroe = {
  nombre: 'ASD',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'Argentina',
    ciudad: 'CABA',
  },
};

aaa.direccion.