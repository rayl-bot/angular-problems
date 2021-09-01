import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clients';
  nombre:string | undefined;
  cif:string | undefined;
  direccion:string | undefined;
  group:number | string | undefined;

  sendValues(nombre:string, cif:string, direccion:string, group:string){

  }
}
