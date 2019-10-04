import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpContenedorComponent } from './cmp-contenedor/cmp-contenedor.component';
import { CmpImagenComponent } from './cmp-imagen/cmp-imagen.component';
import { CmpTextoComponent } from './cmp-texto/cmp-texto.component';
import { CmpAutoTablaComponent } from './cmp-auto-tabla/cmp-auto-tabla.component';

import { FormsModule } from '@angular/forms';
import { CmpAutoTablaDetalleComponent } from './cmp-auto-tabla-detalle/cmp-auto-tabla-detalle.component';
import { MyDatePipePipe } from './myPipes/my-date-pipe.pipe';
import { MyMayusPipePipe } from './myPipes/my-mayus-pipe.pipe';
import { MyVelocPipe } from './myPipes/my-veloc.pipe';
import { CmpEquipoTablaComponent } from './cmp-equipo-tabla/cmp-equipo-tabla.component';
import { CmpEquipoTablaDetalleComponent } from './cmp-equipo-tabla-detalle/cmp-equipo-tabla-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpContenedorComponent,
    CmpImagenComponent,
    CmpTextoComponent,
    CmpAutoTablaComponent,
    CmpAutoTablaDetalleComponent,
    MyDatePipePipe,
    MyMayusPipePipe,
    MyVelocPipe,
    CmpEquipoTablaComponent,
    CmpEquipoTablaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
