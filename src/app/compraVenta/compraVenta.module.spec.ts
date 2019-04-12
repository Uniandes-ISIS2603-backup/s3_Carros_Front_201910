import { CompraVentaModule } from './compraVenta.module';

describe('CompraVentaModule', () => {
  let compraVentaModule: CompraVentaModule;

  beforeEach(() => {
    compraVentaModule = new CompraVentaModule();
  });

  it('should create an instance', () => {
    expect(compraVentaModule).toBeTruthy();
  });
});
