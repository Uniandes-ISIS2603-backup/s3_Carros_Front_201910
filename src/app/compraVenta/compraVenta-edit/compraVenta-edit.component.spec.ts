import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVentaEditComponent } from './compraVenta-edit.component';

describe('CompraVentaEditComponent', () => {
  let component: CompraVentaEditComponent;
  let fixture: ComponentFixture<CompraVentaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVentaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVentaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
