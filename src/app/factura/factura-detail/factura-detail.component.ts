import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FacturaService } from '../factura.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {


  /**
   * Constructor for the component
   * @param route The route which helps to retrieves the id of the factura to be shown
   * @param facturaService The factura's services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService
  ) { }

  /**
   * El id de la factura que viene en el path get .../facturas/facturaID
   */
  facturaID: number;

  /**
   * The compraVenta whose details we want to show.
   */
  @Input() factura: Factura;

  /**
   * The method which obtains the author whose details we want to show
   */
  getFacturaDetail(): void {
    this.facturaService.getFacturaDetail(this.facturaID)
        .subscribe(laFactura => {
            this.factura = laFactura
        });
   }

  /**
   * The method which initializes the component
   * We need to initialize the editorial so it is never considered as undefined
   */
  ngOnInit() {
    this.facturaID = +this.route.snapshot.paramMap.get('facturaID');
    this.factura = new Factura();
    this.getFacturaDetail();
  }
}
