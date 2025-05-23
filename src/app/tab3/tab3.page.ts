import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SpinnerService } from '../servicios/spinner.service';
import { SonidosService } from '../servicios/sonidos.service';
interface BotonSonido 
{
  id: number;
  imagen: string;
  estado: 'oculta' | 'visible';
  activo?: boolean
}


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {

  cantidadColumnas = '6';

  botones: BotonSonido[] = [];
  public bandera_seleccionada:string;
  public tema_seleccionado:string;
  public imagenes:[string,string,string,string,string,string];

  constructor(
    private platform: Platform,
    
    private spinner: SpinnerService,
    private sonido: SonidosService
  ) {
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

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.botones = [...this.imagenes]
    .map((img, idx) => ({ id: idx, imagen: img, estado: 'visible' as 'visible' }))
    .sort(() => Math.random() - 0.5);
  
  
    this.VerificarOrientacion();

    this.platform.resize.subscribe(() => {
      this.VerificarOrientacion();
    });
  }




  SeleccionarIdioma(idioma: string)
  {

    this.sonido.ejecutarSonido('boton');
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
      this.sonido.ejecutarSonido('boton');
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

  VerificarOrientacion()
  {
    const width = this.platform.width();
    const height = this.platform.height();
    this.cantidadColumnas = width > height ? '4' : '6';
  }

  ejecutarSonido(boton: BotonSonido) 
  {
    const nombreArchivo = boton.imagen.split('/').pop()?.split('.')[0];
  
    if (!nombreArchivo)
    {
      console.error('No se pudo obtener el nombre del archivo');
      return;
    }
  
    let idioma = 'es';

    if (this.bandera_seleccionada.includes('eeuu'))
    {
      idioma = 'en';
    } 
    else if (this.bandera_seleccionada.includes('brasil'))
    {
      idioma = 'br';
    } 

    let tema = 'animales';

    if (this.tema_seleccionado.includes('colores'))
    {
      tema = 'colores';
    } 
    else if (this.tema_seleccionado.includes('numeros')) 
    {
      tema = 'numeros';
    }

    const rutaAudio = `../../assets/audios/${tema}/${idioma}/${nombreArchivo}.mp3`;
  
    console.log('Reproduciendo:', rutaAudio);

    boton.activo = true;
  
    const audio = new Audio(rutaAudio);
    audio.load();
    audio.play();

    audio.onended = () => {
      boton.activo = false;
    };
  }
}
