import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidosComponent } from './raidos.component';

describe('RaidosComponent', () => {
  let component: RaidosComponent;
  let fixture: ComponentFixture<RaidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
