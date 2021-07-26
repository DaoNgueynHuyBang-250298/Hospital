import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBedComponent } from './manager-bed.component';

describe('ManagerBedComponent', () => {
  let component: ManagerBedComponent;
  let fixture: ComponentFixture<ManagerBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
