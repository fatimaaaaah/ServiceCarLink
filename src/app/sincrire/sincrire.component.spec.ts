import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinscrireComponent } from './sincrire.component';

describe('SincrireComponent', () => {
  let component: SinscrireComponent;
  let fixture: ComponentFixture<SinscrireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinscrireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinscrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
