import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PuntoVentaService } from '../punto-venta.service';
import { PuntoVenta } from '../punto-venta';
import { PuntoVentaDetail } from '../punto-venta-detail';

@Component({
  selector: 'app-punto-venta-detail',
  templateUrl: './punto-venta-detail.component.html',
  styleUrls: ['./punto-venta-detail.component.css']
})
export class PuntoVentaDetailComponent implements OnInit {

  constructor(
    private puntoVentaService: PuntoVentaService,
    private route: ActivatedRoute
  ) { }

  puntoVentaDetail: PuntoVentaDetail;

  @Input() puntoVenta_id: number;
  loader: any; 

  getPuntoVentaDetail(): void
  {
    this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id).subscribe(obser => {this.puntoVentaDetail = obser });
  }

  onLoad(params)
  {
    this.puntoVenta_id = parseInt(params['id']);
    console.log("en detail" + this.puntoVenta_id);
    this.puntoVentaDetail = new PuntoVentaDetail;
    this.getPuntoVentaDetail();
  }

  ngOnInit() 
  {
    this.loader= this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}