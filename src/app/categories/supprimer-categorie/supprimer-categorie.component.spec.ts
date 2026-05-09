import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerCategorieComponent } from './supprimer-categorie.component';

describe('SupprimerCategorieComponent', () => {
  let component: SupprimerCategorieComponent;
  let fixture: ComponentFixture<SupprimerCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
