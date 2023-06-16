import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminatorComponent } from './laminator.component';

describe('LaminatorComponent', () => {
  let component: LaminatorComponent;
  let fixture: ComponentFixture<LaminatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaminatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
