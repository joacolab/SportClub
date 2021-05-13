import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermasNoticiaComponent } from './vermas-noticia.component';

describe('VermasNoticiaComponent', () => {
  let component: VermasNoticiaComponent;
  let fixture: ComponentFixture<VermasNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermasNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermasNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
