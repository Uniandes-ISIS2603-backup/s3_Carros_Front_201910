import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CompraVentaService } from '../compraVenta.service';
import { CompraVenta } from '../compraVenta';
import { CompraVentaDetail } from '../compraVenta-detail';

@Component({
  selector: 'app-compraVenta-detail',
  templateUrl: './compraVenta-detail.component.html',
  styleUrls: ['./compraVenta-detail.component.css']
})
export class CompraVentaDetailComponent implements OnInit {
 

  constructor(
    private compraVentaService: CompraVentaService,
    private route: ActivatedRoute
  ) { }

  compraVentaDetail: CompraVentaDetail;

  @Input() compraVentaId : number;

  loader: any;

  getCompraVentaDetail(): void {
    this.compraVentaService.getCompraVentaDetail(this.compraVentaId)
      .subscribe(obs => {
        this.compraVentaDetail = obs
      });
  }

  onLoad(params) {

    this.compraVentaId = parseInt(params['ventaID']);
    console.log(" en detail " + this.compraVentaId);
    this.compraVentaDetail = new CompraVentaDetail();
    this.getCompraVentaDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}