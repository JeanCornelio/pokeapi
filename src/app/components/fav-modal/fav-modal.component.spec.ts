import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavModalComponent } from './fav-modal.component';

describe('FavModalComponent', () => {
  let component: FavModalComponent;
  let fixture: ComponentFixture<FavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
