import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChienComponent } from './ajouter-chien.component';

describe('AjouterChienComponent', () => {
  let component: AjouterChienComponent;
  let fixture: ComponentFixture<AjouterChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
