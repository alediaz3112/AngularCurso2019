import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTextoComponent } from './cmp-texto.component';

describe('CmpTextoComponent', () => {
  let component: CmpTextoComponent;
  let fixture: ComponentFixture<CmpTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
