import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistFavComponent } from './pokelist-fav.component';

describe('PokelistFavComponent', () => {
  let component: PokelistFavComponent;
  let fixture: ComponentFixture<PokelistFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokelistFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokelistFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
