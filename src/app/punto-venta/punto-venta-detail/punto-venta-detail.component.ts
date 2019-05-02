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
/**
 * 
 */
export class PuntoVentaDetailComponent implements OnInit {

  /**
   * El punto de venta
   */
 @Input() puntoVentaDetail: PuntoVentaDetail;
 
 /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
    private puntoVentaService: PuntoVentaService,
    private route: ActivatedRoute
  ) { }

      /**
    * El id del punto de venta que viene en el path get .../authors/puntove
    */

   puntoVenta_id: number;
 
   /**
    *  The method which obtains the author whose details we want to show
    */
  getPuntoVentaDetail(): void
  {
    this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id).subscribe(obser => {this.puntoVentaDetail = obser });
  }


  /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
  ngOnInit() 
  {
      this.puntoVenta_id = +this.route.snapshot.paramMap.get('id');
        if (this.puntoVenta_id){
        this.puntoVentaDetail = new PuntoVentaDetail();
        this.getPuntoVentaDetail();
    
  }
  }



}