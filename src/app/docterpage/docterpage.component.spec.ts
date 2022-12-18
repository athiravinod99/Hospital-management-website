import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterpageComponent } from './docterpage.component';

describe('DocterpageComponent', () => {
  let component: DocterpageComponent;
  let fixture: ComponentFixture<DocterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocterpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
