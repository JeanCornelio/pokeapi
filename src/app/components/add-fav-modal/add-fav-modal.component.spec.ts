import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavModalComponent } from './add-fav-modal.component';

describe('AddFavModalComponent', () => {
  let component: AddFavModalComponent;
  let fixture: ComponentFixture<AddFavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
