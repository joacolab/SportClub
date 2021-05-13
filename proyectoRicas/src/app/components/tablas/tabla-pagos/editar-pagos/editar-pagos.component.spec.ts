import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPagosComponent } from './editar-pagos.component';

describe('EditarPagosComponent', () => {
  let component: EditarPagosComponent;
  let fixture: ComponentFixture<EditarPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
