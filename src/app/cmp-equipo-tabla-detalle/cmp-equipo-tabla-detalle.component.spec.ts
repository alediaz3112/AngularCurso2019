import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpEquipoTablaDetalleComponent } from './cmp-equipo-tabla-detalle.component';

describe('CmpEquipoTablaDetalleComponent', () => {
  let component: CmpEquipoTablaDetalleComponent;
  let fixture: ComponentFixture<CmpEquipoTablaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpEquipoTablaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpEquipoTablaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
