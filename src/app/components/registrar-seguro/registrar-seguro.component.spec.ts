import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSeguroComponent } from './registrar-seguro.component';

describe('RegistrarSeguroComponent', () => {
  let component: RegistrarSeguroComponent;
  let fixture: ComponentFixture<RegistrarSeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSeguroComponent]
    });
    fixture = TestBed.createComponent(RegistrarSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
