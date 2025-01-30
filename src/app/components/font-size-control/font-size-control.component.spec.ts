import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeControlComponent } from './font-size-control.component';

describe('FontSizeControlComponent', () => {
  let component: FontSizeControlComponent;
  let fixture: ComponentFixture<FontSizeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSizeControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
