import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpContenedorComponent } from './cmp-contenedor.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('CmpContenedorComponent', () => {
  let component: CmpContenedorComponent;
  let fixture: ComponentFixture<CmpContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpContenedorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
