import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConveniosComponent } from './tabla-convenios.component';

describe('TablaConveniosComponent', () => {
  let component: TablaConveniosComponent;
  let fixture: ComponentFixture<TablaConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
