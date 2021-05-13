import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermasPrecioComponent } from './vermas-precio.component';

describe('VermasPrecioComponent', () => {
  let component: VermasPrecioComponent;
  let fixture: ComponentFixture<VermasPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermasPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermasPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
