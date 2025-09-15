import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonDetail } from './missing-person-detail';

describe('MissingPersonDetail', () => {
  let component: MissingPersonDetail;
  let fixture: ComponentFixture<MissingPersonDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingPersonDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingPersonDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
