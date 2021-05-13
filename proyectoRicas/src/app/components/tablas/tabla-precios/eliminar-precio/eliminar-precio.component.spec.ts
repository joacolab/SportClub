import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPrecioComponent } from './eliminar-precio.component';

describe('EliminarPrecioComponent', () => {
  let component: EliminarPrecioComponent;
  let fixture: ComponentFixture<EliminarPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
