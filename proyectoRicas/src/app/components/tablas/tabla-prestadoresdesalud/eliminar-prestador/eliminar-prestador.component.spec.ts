import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPrestadorComponent } from './eliminar-prestador.component';

describe('EliminarPrestadorComponent', () => {
  let component: EliminarPrestadorComponent;
  let fixture: ComponentFixture<EliminarPrestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPrestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
