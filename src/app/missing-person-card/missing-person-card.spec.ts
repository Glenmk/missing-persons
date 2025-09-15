import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonCard } from './missing-person-card';

describe('MissingPersonCard', () => {
  let component: MissingPersonCard;
  let fixture: ComponentFixture<MissingPersonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingPersonCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingPersonCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
