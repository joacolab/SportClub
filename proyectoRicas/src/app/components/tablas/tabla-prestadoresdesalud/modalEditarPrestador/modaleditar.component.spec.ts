import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleditarComponent } from './modaleditar.component';

describe('ModaleditarComponent', () => {
  let component: ModaleditarComponent;
  let fixture: ComponentFixture<ModaleditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
