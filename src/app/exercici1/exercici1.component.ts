import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {cambiarColor} from './exercici1.js';
// @ts-ignore
import {mida} from './exercici1.js';
// @ts-ignore
import {contarPalabras} from './exercici1.js';
// @ts-ignore
import {afegirImatge} from './exercici1.js';
// @ts-ignore


@Component({
  selector: 'app-exercici1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercici1.component.html',
  styleUrl: './exercici1.component.css'
})


export class Exercici1Component implements OnInit{
  etiqueta: any
  URL: any;

  //EXERCICI 5 OPCIONAL

  arrayElements: string[] = ['Cancelo', 'Laporta', 'Cigaleru'];
  midaLletra: number = 16;

  augmentar() {
    this.midaLletra += 2;
  }

  constructor() {

  }
  ngOnInit(){

    //EXERCICI 1

    let x = document.getElementById('EtiquetaH1');
    // @ts-ignore
    document.getElementById('EtiquetaH1').innerHTML = document.getElementById('EtiquetaH1').innerHTML.toUpperCase();

    //EXERCICI 2

    this.URL = document.location.href;

    //EXERCICI 3

    cambiarColor('idElement')

    //EXERCICI 4

    mida(300, 100)

    //EXERCICI 6

    contarPalabras('paragraf', 'resultat');

    //EXERCICI 7

    afegirImatge();

    //EXERCICI 5 OPCIONAL

  }
}
