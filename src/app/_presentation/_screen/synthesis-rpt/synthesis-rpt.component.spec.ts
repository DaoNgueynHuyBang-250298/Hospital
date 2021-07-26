import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesisRPTComponent } from './synthesis-rpt.component';

describe('SynthesisRPTComponent', () => {
  let component: SynthesisRPTComponent;
  let fixture: ComponentFixture<SynthesisRPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthesisRPTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthesisRPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
