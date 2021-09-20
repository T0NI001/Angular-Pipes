import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private primengConfig: PrimeNGConfig){}

  //Efectos de splash
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  //Pruebas con pipes
  // nombre: string = 'fernaNdo heRrera';
  // valor: number = 10000;
  // obj = {
  //   nombre: 'Fernando'
  // }


  // mostrarNombre(){
  //   console.log( this.nombre );
  //   console.log( this.valor );
  //   console.log( this.obj );
  // }
}
