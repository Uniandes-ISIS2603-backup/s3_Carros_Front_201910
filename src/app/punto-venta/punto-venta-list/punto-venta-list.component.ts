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
/**
 * Clase del componente qe lista todos los puntos de venta
 */
export class PuntoVentaListComponent implements OnInit {

  /**
    * Constructor for the component
    * @param editorialService The author's services provider
    */
  constructor(private puntoVentaService: PuntoVentaService) { }
  //

  /**
   * Todos los puntos de venta en la aplicacion
   */
  puntosVenta: PuntoVenta[];

  /**
   * Muestra el create cuando es true
   */
  showCreate: boolean;

  /**
   * Id de un punto d venta selecionado
   */
  puntoVenta_id: number;

  /**
   * Punto de venta seleccionado
   */
  selectedPuntoVenta: PuntoVenta;

  /**
   * Muestra o oculta el edit del punto de venta
   */
  showEdit: boolean;
   /**
     * Shows or hides the detail of an author
     */
 showView: boolean;


  /**
   * Metodo que
   * @param puntoVenta_id 
   */
  onSelected(puntoVenta_id: number): void
  {
    this.showCreate = false; 
    this.puntoVenta_id = puntoVenta_id;
    this.selectedPuntoVenta = new PuntoVentaDetail();
    this.getPuntoVentaDetail();
  }

  /**
   * Muestra o oculta el componenete create
   */
  showHideCreate(): void {
        if (this.selectedPuntoVenta) {
            this.selectedPuntoVenta = undefined;
            this.puntoVenta_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

    /**
     * Obtiene todos los puntos de venta
     */
  getPuntosVenta(): void {
    this.puntoVentaService.getPuntosVenta().subscribe(puntosVenta => this.puntosVenta = puntosVenta);
  }

    /**
     * Obtiene el detail de un punto de venta
     */
  getPuntoVentaDetail(): void
  {
    this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id).subscribe(selectedPuntoVenta => { this.selectedPuntoVenta = selectedPuntoVenta});
  }

  /**
   * Muestra o oculta el edit de unn punto de venta
   * @param puntoVenta_id 
   */
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

   /**
    * This will initialize the component by retrieving the list of editorials from the service
    * This method will be called when the component is created
    */
  ngOnInit() {
    this.showCreate = false; 
    this.selectedPuntoVenta = undefined; 
    this.puntoVenta_id = undefined;
    this.getPuntosVenta();
  }

}