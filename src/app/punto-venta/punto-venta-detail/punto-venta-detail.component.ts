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

 @Input() puntoVentaDetail: PuntoVentaDetail;
  constructor(
    private puntoVentaService: PuntoVentaService,
    private route: ActivatedRoute
  ) { }

  

   puntoVenta_id: number;
 
  getPuntoVentaDetail(): void
  {
    this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id).subscribe(obser => {this.puntoVentaDetail = obser });
  }



  ngOnInit() 
  {
      this.puntoVenta_id = +this.route.snapshot.paramMap.get('id');
        if (this.puntoVenta_id){
        this.puntoVentaDetail = new PuntoVentaDetail();
        this.getPuntoVentaDetail();
    
  }
  }



}