import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVentaCreateComponent } from './compraVenta-create.component';

describe('CompraVentaCreateComponent', () => {
  let component: CompraVentaCreateComponent;
  let fixture: ComponentFixture<CompraVentaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVentaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVentaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
