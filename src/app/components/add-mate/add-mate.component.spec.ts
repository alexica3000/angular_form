import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateComponent } from './add-mate.component';

describe('AddMateComponent', () => {
  let component: AddMateComponent;
  let fixture: ComponentFixture<AddMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
