import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-auto-tabla',
  templateUrl: './cmp-auto-tabla.component.html',
  styleUrls: ['./cmp-auto-tabla.component.css']
})
export class CmpAutoTablaComponent implements OnInit {

  texto : String = "El limite de velocidad es";
  num : number = 0;

  // datos : Array <any> = [
  //   {"fecha": "2019-05-01", "modelo": "Ford Ka", "velocidad" : 90, "patente" : "AA 234 BB"},
  //   {"fecha": "2019-05-03", "modelo": "Ford Fiesta", "velocidad" : 150, "patente" : "AB 234 BB"},
  //   {"fecha": "2019-05-22", "modelo": "Ford Mondeo", "velocidad" : 200, "patente" : "AC 234 BB"},
  //   {"fecha": "2019-05-22", "modelo": "Ford Falcon", "velocidad" : 70, "patente" : "AC 234 BB"}
  // ]

  detalle : any;

  datos : Array <any> =
  [ 
    { "fecha": "2019-05-01", "detalles":{ "modelo": "Ford Ka", "calle": "Riobamba 2123" }, "velocidad": 100 , "patente": "AA 456 AA" },
    { "fecha": "2019-06-01", "detalles":{ "modelo": "Toyota Etios", "calle": "Riobamba 2123" }, "velocidad": 110 , "patente": "PA 456 AB" },
    { "fecha": "2019-07-02", "detalles":{ "modelo": "Volkswagen Gol", "calle": "Riobamba 2123" }, "velocidad": 130 , "patente": "AA 456 AC" },
    { "fecha": "2019-08-10", "detalles":{ "modelo": "Chevrolet Onix", "calle": "Riobamba 2123" }, "velocidad": 150 , "patente": "MA 456 AD" },
    { "fecha": "2019-01-07", "detalles":{ "modelo": "Renault Nuevo Sandero", "calle": "Riobamba 2123" }, "velocidad": 60 , "patente": "AA 456 AE" },
    { "fecha": "2019-02-09", "detalles":{ "modelo": "Renault Kwid", "calle": "Riobamba 2123" }, "velocidad": 80 , "patente": "NA 456 AF" },
    { "fecha": "2019-03-16", "detalles":{ "modelo": "Volkswagen Amarok", "calle": "Riobamba 2123" }, "velocidad": 70 , "patente": "AA 456 AG" },
    { "fecha": "2019-05-17", "detalles":{ "modelo": "Peugeot 208", "calle": "Riobamba 2123" }, "velocidad": 90 , "patente": "AY 458 AA" },
    { "fecha": "2019-06-02", "detalles":{ "modelo": "Fiat Cronos", "calle": "Riobamba 2123" }, "velocidad": 110 , "patente": "HA 458 YT" },
    { "fecha": "2019-10-03", "detalles":{ "modelo": "Toyota Hilux", "calle": "Riobamba 2123" }, "velocidad": 40 , "patente": "BA 459 TR" },
    { "fecha": "2019-11-05", "detalles":{ "modelo": "Chevrolet Onix", "calle": "Riobamba 2123" }, "velocidad": 85 , "patente": "AA 459 FR" },
    { "fecha": "2019-03-11", "detalles":{ "modelo": "Renault Nuevo Sandero", "calle": "Riobamba 2123" }, "velocidad": 75 , "patente": "AA 477 GG" },
    { "fecha": "2019-02-10", "detalles":{ "modelo": "Toyota Etios", "calle": "Riobamba 2123" }, "velocidad": 100 , "patente": "AA 499 FF" },
  ]

  constructor() { }

  obtenerColorVelocidad(registro : any, limiteInf: number, limiteSup : number) : string {

    if (registro.velocidad >= limiteSup)
      return 'text-danger';

    if (registro.velocidad >= limiteInf && registro.velocidad < limiteSup)
    return 'text-warning';

  }

  ocultarFila(registro : any, veloc : number) : boolean {

    if (registro.velocidad >= (veloc - veloc * 0.15))
      return true;
    else 
      return false;  
      

  }

  pasarValor(det : any) {

    this.detalle = det;

  }

  ngOnInit() {
  }

}
