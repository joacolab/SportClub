import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContratoComponent } from './eliminar-contrato.component';

describe('EliminarContratoComponent', () => {
  let component: EliminarContratoComponent;
  let fixture: ComponentFixture<EliminarContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
