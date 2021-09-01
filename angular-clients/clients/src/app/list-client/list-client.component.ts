import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  @Input() nombre: string | undefined;
  @Input() cif: string | undefined;
  @Input() direccion: string | undefined;
  @Input() group: number | string |undefined;

  //list:string; lists = [];
  constructor() { }

  ngOnInit(): void {
  }

}
