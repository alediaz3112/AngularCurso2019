import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-auto-tabla-detalle',
  templateUrl: './cmp-auto-tabla-detalle.component.html',
  styleUrls: ['./cmp-auto-tabla-detalle.component.css']
})
export class CmpAutoTablaDetalleComponent implements OnInit {

  @Input('detalle') detalle : String;

  constructor() { }

  ngOnInit() {
  }

}
