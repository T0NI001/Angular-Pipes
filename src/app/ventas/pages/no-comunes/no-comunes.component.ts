import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  
  // i18nSelect
  nombre: string = 'Toni';
  genero: string =  'M';

  invitacionObj = {
    'M': 'invitarlo',
    'F' : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pepe', 'Luca', 'Lucía'];
  clientesObj = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.genero === 'M'){
      this.genero = 'F';
      this.nombre = 'Maria';
    }else{
      this.genero = 'M';
      this.nombre = 'Toni';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }


  // KeyValue Pipe

  persona = {
    nombre: 'Toni',
    edad: 27,
    direccion: 'Sevilla, España'
  }

  // JsonPipe

  heroes = [
    {
      nombre: 'Thor',
      vuela: true
    },
    {
      nombre: 'Hulk',
      vuela: false
    },
    {
      nombre: 'Iron Man',
      vuela: true
    }
  ]


  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5


  valorPromesa = new Promise( (resolve, reject ) =>{
    setTimeout(() => {
      resolve( 'Tenemos data de promesa.');
    }, 3500);
  });
  // constructor(){
  //   this.miObservable.subscribe(console.log);
  // }


}
