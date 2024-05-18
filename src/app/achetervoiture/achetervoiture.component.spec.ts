import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchetervoitureComponent } from './achetervoiture.component';

describe('AchetervoitureComponent', () => {
  let component: AchetervoitureComponent;
  let fixture: ComponentFixture<AchetervoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchetervoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchetervoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
