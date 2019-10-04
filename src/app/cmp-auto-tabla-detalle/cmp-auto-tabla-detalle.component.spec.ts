import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAutoTablaDetalleComponent } from './cmp-auto-tabla-detalle.component';

describe('CmpAutoTablaDetalleComponent', () => {
  let component: CmpAutoTablaDetalleComponent;
  let fixture: ComponentFixture<CmpAutoTablaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpAutoTablaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpAutoTablaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
