import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContratosComponent } from './tabla-contratos.component';

describe('TablaContratosComponent', () => {
  let component: TablaContratosComponent;
  let fixture: ComponentFixture<TablaContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
