import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListComponentComponent } from './image-list-component.component';

describe('ImageListComponentComponent', () => {
  let component: ImageListComponentComponent;
  let fixture: ComponentFixture<ImageListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
