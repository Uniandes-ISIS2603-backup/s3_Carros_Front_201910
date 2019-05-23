import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { CompraVentaService } from '../compraVenta.service';
import { CompraVenta } from '../compraVenta';
import { CompraVentaDetail } from '../compraVenta-detail';

@Component({
  selector: 'app-compraVenta-detail',
  templateUrl: './compraVenta-detail.component.html',
  styleUrls: ['./compraVenta-detail.component.css']
})
export class CompraVentaDetailComponent implements OnInit 
{
  /**
   * The component's constructor
   * @param compraVentaService The compraVenta's service
   * @param route The route element which helps to obtain the compraVenta's id
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private compraVentaService: CompraVentaService,
    private route: ActivatedRoute
  ) { }

  /**
   * The compraVenta's id retrieved from the path.
   */
  ventaID: number;

  /**
   * The compraVenta whose details we want to show.
   */
  @Input() compraVentaDetail: CompraVentaDetail;

  /**
   * The method which retrieves the books of an editorial
   */
  getCompraVentaDetail(): void 
  {
    this.compraVentaService.getCompraVentaDetail(this.ventaID)
        .subscribe(theEditorialDetail => 
          {
            this.compraVentaDetail = theEditorialDetail
          });
  }

  /**
   * The method which initializes the component
   * We need to initialize the editorial so it is never considered as undefined
   */
  ngOnInit() {
    this.ventaID = +this.route.snapshot.paramMap.get('id');
    this.compraVentaDetail = new CompraVentaDetail();
    this.getCompraVentaDetail();
  }

}