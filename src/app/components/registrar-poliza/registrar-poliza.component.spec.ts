import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPolizaComponent } from './registrar-poliza.component';

describe('RegistrarPolizaComponent', () => {
  let component: RegistrarPolizaComponent;
  let fixture: ComponentFixture<RegistrarPolizaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPolizaComponent]
    });
    fixture = TestBed.createComponent(RegistrarPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
