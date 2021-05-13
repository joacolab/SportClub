import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMasContratoComponent } from './ver-mas-contrato.component';

describe('VerMasContratoComponent', () => {
  let component: VerMasContratoComponent;
  let fixture: ComponentFixture<VerMasContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMasContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMasContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
