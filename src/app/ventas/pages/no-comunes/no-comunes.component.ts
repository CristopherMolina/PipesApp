import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Hernando','Eduardo','Fernando'];
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Ana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aqua',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })
}
