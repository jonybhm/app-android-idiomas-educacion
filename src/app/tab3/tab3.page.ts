import { Component, OnInit } from '@angular/core';

interface BotonSonido 
{
  id: number;
  imagen: string;
  estado: 'oculta' | 'visible';
}


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {


  botones: BotonSonido[] = [];
  public bandera_seleccionada:string;
  public tema_seleccionado:string;
  public imagenes:[string,string,string,string,string,string];

  constructor() {
    this.bandera_seleccionada = '../../assets/idiomas/argentina.png';
    this.tema_seleccionado = '../../assets/temas/animales.png';
    this.imagenes = 
    [
      '../../assets/animales/cabra.png',
      '../../assets/animales/carpincho.png',
      '../../assets/animales/pato.png',
      '../../assets/animales/perro.png',
      '../../assets/animales/serpiente.png',
      '../../assets/animales/vaca.png',
    ];
  }

  ngOnInit(): void {
    this.botones = [...this.imagenes]
    .map((img, idx) => ({ id: idx, imagen: img, estado: 'visible' as 'visible' }))
    .sort(() => Math.random() - 0.5);
  }

  SeleccionarIdioma(idioma: string)
  {
    if(idioma=='es')
    {
      this.bandera_seleccionada= '../../assets/idiomas/argentina.png';
    }
    else if(idioma=='en')
    {
      this.bandera_seleccionada= '../../assets/idiomas/eeuu.png';
    }    
    else if(idioma=='br')
    {
      this.bandera_seleccionada= '../../assets/idiomas/brasil.png';
    }    
  }

  SeleccionarTema(tema: string)
  {
      
    if(tema=='colores')
    {
      this.tema_seleccionado= '../../assets/temas/colores.png';
      this.imagenes = 
      [
        '../../assets/colores/rojo.png',
        '../../assets/colores/azul.png',
        '../../assets/colores/verde.png',
        '../../assets/colores/amarillo.png',
        '../../assets/colores/violeta.png',
        '../../assets/colores/naranja.png',
      ];
    }
    else if(tema=='numeros')
    {
      this.tema_seleccionado= '../../assets/temas/numeros.png';
      this.imagenes = 
      [
        '../../assets/numeros/1.png',
        '../../assets/numeros/2.png',
        '../../assets/numeros/3.png',
        '../../assets/numeros/5.png',
        '../../assets/numeros/8.png',
        '../../assets/numeros/0.png',
      ];
    }  
    else if(tema=='animales')
    {
      this.tema_seleccionado= '../../assets/temas/animales.png';
      this.imagenes = 
      [
        '../../assets/animales/cabra.png',
        '../../assets/animales/carpincho.png',
        '../../assets/animales/pato.png',
        '../../assets/animales/perro.png',
        '../../assets/animales/serpiente.png',
        '../../assets/animales/vaca.png',
      ];
    }    
    
    this.botones = [...this.imagenes]
      .map((img, idx) => ({ id: idx, imagen: img, estado: 'visible' as 'visible' }))
      .sort(() => Math.random() - 0.5);

    
  }

  ejecutarSonido()
  {

  }
}
