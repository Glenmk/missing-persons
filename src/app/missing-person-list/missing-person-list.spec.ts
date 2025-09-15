import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonList } from './missing-person-list';

describe('MissingPersonList', () => {
  let component: MissingPersonList;
  let fixture: ComponentFixture<MissingPersonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingPersonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingPersonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
