import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVentaDetailComponent } from './compraVenta-detail.component';

describe('CompraVentaDetailComponent', () => {
  let component: CompraVentaDetailComponent;
  let fixture: ComponentFixture<CompraVentaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVentaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVentaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});