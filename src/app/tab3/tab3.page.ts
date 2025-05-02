import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  public bandera_seleccionada:string;
  public tema_seleccionado:string;

  constructor() {
    this.bandera_seleccionada = '../../assets/idiomas/argentina.png';
    this.tema_seleccionado = '../../assets/temas/animales.png';
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
    }
    else if(tema=='numeros')
    {
      this.tema_seleccionado= '../../assets/temas/numeros.png';
    }  
    else if(tema=='animales')
    {
      this.tema_seleccionado= '../../assets/temas/animales.png';
    }    
  }
}
