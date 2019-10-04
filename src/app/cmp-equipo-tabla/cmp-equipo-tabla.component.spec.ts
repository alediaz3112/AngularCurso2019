import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpEquipoTablaComponent } from './cmp-equipo-tabla.component';

describe('CmpEquipoTablaComponent', () => {
  let component: CmpEquipoTablaComponent;
  let fixture: ComponentFixture<CmpEquipoTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpEquipoTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpEquipoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
