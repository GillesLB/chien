import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChiensComponent } from './liste-chiens.component';

describe('ListeChiensComponent', () => {
  let component: ListeChiensComponent;
  let fixture: ComponentFixture<ListeChiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeChiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
