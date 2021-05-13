import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermasCategoriaComponent } from './vermas-categoria.component';

describe('VermasCategoriaComponent', () => {
  let component: VermasCategoriaComponent;
  let fixture: ComponentFixture<VermasCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermasCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermasCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
