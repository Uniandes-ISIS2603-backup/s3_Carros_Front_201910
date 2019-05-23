import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraAutoComponent } from './compra-auto.component';

describe('CompraAutoComponent', () => {
  let component: CompraAutoComponent;
  let fixture: ComponentFixture<CompraAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
