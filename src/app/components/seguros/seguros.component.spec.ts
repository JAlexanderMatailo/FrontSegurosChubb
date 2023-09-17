import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosComponent } from './seguros.component';

describe('SegurosComponent', () => {
  let component: SegurosComponent;
  let fixture: ComponentFixture<SegurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegurosComponent]
    });
    fixture = TestBed.createComponent(SegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
