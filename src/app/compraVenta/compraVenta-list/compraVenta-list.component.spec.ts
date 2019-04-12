import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVentaListComponent } from './compraVenta-list.component';

describe('CompraVentaListComponent', () => {
  let component: CompraVentaListComponent;
  let fixture: ComponentFixture<CompraVentaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVentaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVentaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
