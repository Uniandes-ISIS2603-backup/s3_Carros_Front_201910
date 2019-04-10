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

  @Input() compraVentaDetail: CompraVentaDetail;
  
  compraVentaId : number;

  getCompraVentaDetail(): void 
  {
    this.compraVentaService.getCompraVentaDetail(this.compraVentaId).subscribe(obs => {this.compraVentaDetail = obs});
  }

  ngOnInit() 
  {
    this.compraVentaId = +this.route.snapshot.paramMap.get('ventaID');
    if (this.compraVentaId)
    this.compraVentaDetail = new CompraVentaDetail();
    this.getCompraVentaDetail();
  }
}