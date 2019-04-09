import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { PuntoVenta } from '../punto-venta';
import { PuntoVentaService } from '../punto-venta.service';
import { PuntoVentaDetail } from '../punto-venta-detail';

@Component({
  selector: 'app-punto-venta-list',
  templateUrl: './punto-venta-list.component.html',
  styleUrls: ['./punto-venta-list.component.css']
})
export class PuntoVentaListComponent implements OnInit {

  constructor(private puntoVentaService: PuntoVentaService) { }
  //

  puntosVenta: PuntoVenta[];

  showCreate: boolean;

  puntoVenta_id: number;

  selectedPuntoVenta: PuntoVenta;

  showEdit: boolean;
   /**
     * Shows or hides the detail of an author
     */
 showView: boolean;



  onSelected(puntoVenta_id: number): void
  {
    this.showCreate = false; 
    this.puntoVenta_id = puntoVenta_id;
    this.selectedPuntoVenta = new PuntoVentaDetail();
    this.getPuntoVentaDetail();
  }

  showHideCreate(): void {
        if (this.selectedPuntoVenta) {
            this.selectedPuntoVenta = undefined;
            this.puntoVenta_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

  getPuntosVenta(): void {
    this.puntoVentaService.getPuntosVenta().subscribe(puntosVenta => this.puntosVenta = puntosVenta);
  }

  getPuntoVentaDetail(): void
  {
    this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id).subscribe(selectedPuntoVenta => { this.selectedPuntoVenta = selectedPuntoVenta});
  }
   showHideEdit(puntoVenta_id: number): void {
        if (!this.showEdit || (this.showEdit && puntoVenta_id != this.selectedPuntoVenta.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.puntoVenta_id = puntoVenta_id;
            this.selectedPuntoVenta = new PuntoVentaDetail();
            this.getPuntoVentaDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }

  ngOnInit() {
    this.showCreate = false; 
    this.selectedPuntoVenta = undefined; 
    this.puntoVenta_id = undefined;
    this.getPuntosVenta();
  }

}