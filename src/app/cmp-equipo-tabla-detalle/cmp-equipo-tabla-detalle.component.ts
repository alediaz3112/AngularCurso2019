import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-equipo-tabla-detalle',
  templateUrl: './cmp-equipo-tabla-detalle.component.html',
  styleUrls: ['./cmp-equipo-tabla-detalle.component.css']
})
export class CmpEquipoTablaDetalleComponent implements OnInit {

  @Input('detalle') detalle : String;

  EQUIPOS = {
    "BRA": {
        "ame": { "nombre": "America Futebol Clube", "estadio": "Raimundo Sampaio", "apodo": "?", "fundacion": "1912" },
        "atm": { "nombre": "Atlético Mineiro", "estadio": "Raimundo Sampaio", "apodo": "?", "fundacion": "1908" },
        "atp": { "nombre": "Athletico Paranaense", "estadio": "Arena da Baixada", "apodo": "?", "fundacion": "1924" },
        "bah": { "nombre": "Bahia", "estadio": "Arena Fonte Nova", "apodo": "?", "fundacion": "1931" },
        "bot": { "nombre": "Botafogo", "estadio": "Nilton Santos", "apodo": "?", "fundacion": "1904" },
        "cea": { "nombre": "Ceara", "estadio": "Gigante de Boa Vista", "apodo": "?", "fundacion": "1914" },
        "cha": { "nombre": "Chapecoense", "estadio": "Arena Condá", "apodo": "?", "fundacion": "1973" },
        "cor": { "nombre": "Corinthians", "estadio": "Arena Corinthians", "apodo": "?", "fundacion": "1910" },
        "cru": { "nombre": "Cruzeiro", "estadio": "Mineirão", "apodo": "?", "fundacion": "1921" },
        "fla": { "nombre": "Flamengo", "estadio": "Da Gávea", "apodo": "?", "fundacion": "1895" },
        "flu": { "nombre": "Fluminense", "estadio": "Das Laranjeiras", "apodo": "?", "fundacion": "1902" },
        "gre": { "nombre": "Gremio", "estadio": "Arena do Grêmio", "apodo": "?", "fundacion": "1903" },
        "int": { "nombre": "Internacional", "estadio": "Beira-Rio", "apodo": "?", "fundacion": "1909" },
        "pal": { "nombre": "Palmeiras", "estadio": "Allianz Parque", "apodo": "?", "fundacion": "1914"},
        "par": { "nombre": "Parana", "estadio": "Durival de Britto e Silva", "apodo": "?", "fundacion": "1989" },
        "san": { "nombre": "Santos", "estadio": "Vila Belmiro", "apodo": "?", "fundacion": "1912" },
        "sao": { "nombre": "São Paulo", "estadio": "Morumbi", "apodo": "?", "fundacion": "1930" },
        "sre": { "nombre": "Sport Recife", "estadio": "Ilha do Retiro", "apodo": "?", "fundacion": "1905" },
        "vga": { "nombre": "Vasco da Gama", "estadio": "São Januário", "apodo": "?", "fundacion": "1898"},
        "vit": { "nombre": "Vitoria", "estadio": "Manoel Barradas", "apodo": "?", "fundacion": "1899" }
    },
    "ARG": {
        "ald": { "nombre": "Aldosivi", "estadio": "José María Minella", "apodo": "Tiburon", "fundacion": "1913" },
        "arj": { "nombre": "Argentinos Juniors", "estadio": "Diego Armando Maradona", "apodo": "Bicho", "fundacion": "1904" },
        "atu": { "nombre": "Atletico Tucuman", "estadio": "Monumental José Fierro", "apodo": "Decano", "fundacion": "1902"},
        "bel": { "nombre": "Belgrano", "estadio": "Mario Alberto Kempes", "apodo": "Pirata", "fundacion": "1905"},
        "boc": { "nombre": "Boca Juniors", "estadio": "Bombonera", "apodo": "Xeneize", "fundacion": "1905" },
        "dyj": { "nombre": "Defensa y Justicia", "estadio": "", "apodo": "1935", "fundacion": "1935" },
        "god": { "nombre": "Godoy Cruz", "estadio": "Malvinas Argentinas", "apodo": "Tomba", "fundacion": "1921" },
        "huc": { "nombre": "Huracan", "estadio": "Tomas Adolfo Duco", "apodo": "Globo", "fundacion": "1908"},
        "ind": { "nombre": "Independiente", "estadio": "Libertadores de America", "apodo": "Rojo", "fundacion": "1905"},
        "lan": { "nombre": "Lanus", "estadio": "Ciudad de Lanus", "apodo": "Granate", "fundacion": "1915"},
        "rac": { "nombre": "Racing Club", "estadio": "Cilindro de Avellaneda", "apodo": "Academia", "fundacion": "1903"},
        "riv": { "nombre": "River Plate", "estadio": "Monumental", "apodo": "Millonario", "fundacion": "1901"},
        "ros": { "nombre": "Rosario Central", "estadio": "Gigante de Arroyito", "apodo": "Canalla", "fundacion": "1889"},
        "sla": { "nombre": "San Lorenzo de Almagro", "estadio": "Nuevo Gasometro", "apodo": "Ciclon", "fundacion": "1908"},
        "tal": { "nombre": "Talleres", "estadio": "Mario Alberto Kempes", "apodo": "T", "fundacion": "1913"},
        "tig": { "nombre": "Tigre", "estadio": "Jose Dellagiovanna", "apodo": "Matador", "fundacion": "1902" },
        "vel": { "nombre": "Velez Sarfield", "estadio": "Jose Amalfitani", "apodo": "Fortin", "fundacion": "1910" }
    }
}

  constructor() { }

  ngOnInit() {
  }

}
