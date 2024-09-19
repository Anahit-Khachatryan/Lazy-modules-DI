import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySecondComponent } from './lazy-second.component';

describe('LazySecondComponent', () => {
  let component: LazySecondComponent;
  let fixture: ComponentFixture<LazySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazySecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
