import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAutoTablaComponent } from './cmp-auto-tabla.component';
import { By } from '@angular/platform-browser';

describe('Pruebas sobre tabla de autos', () => {
  let component: CmpAutoTablaComponent;
  let fixture: ComponentFixture<CmpAutoTablaComponent>;

  it('Control de cantidad de registros HTML vs TS', () => {

    let trs = fixture.debugElement.queryAll(By.css("tr"));
    
    const lineaCabecera = 1;
    
    expect(trs.length).toBe(component.datos.length+lineaCabecera);
  });

  it('La fila con veloc mayor igual a 100 pone class text-danger', () => {
      
      // let fila = fixture.debugElement.queryAll(By.css("tr"));
      component.num = 100;
      fixture.detectChanges();
      const filasTextDanger : number = fixture.debugElement.queryAll(By.css(".text-danger")).length;
      const filasTextDangerComponent : number = component.datos.filter (fila => fila.velocidad >= 100).length;
      expect(filasTextDanger).toBe(filasTextDangerComponent);

  });  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpAutoTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpAutoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
