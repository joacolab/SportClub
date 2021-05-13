import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermasPersonaComponent } from './vermas-persona.component';

describe('VermasPersonaComponent', () => {
  let component: VermasPersonaComponent;
  let fixture: ComponentFixture<VermasPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermasPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermasPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
