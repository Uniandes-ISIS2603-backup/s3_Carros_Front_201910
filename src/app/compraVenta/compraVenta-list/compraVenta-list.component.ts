import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {CompraVenta} from '../compraVenta';
import {CompraVentaService} from '../compraVenta.service';
import { CompraVentaDetail } from '../compraVenta-detail';

/**
* The component for the list of compraVentas.
*/
@Component({
  selector: 'app-compraVenta-list',
  templateUrl: './compraVenta-list.component.html',
  styleUrls: ['./compraVenta-list.component.css']
})
export class CompraVentaListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param compraVentaService The author's services provider
   */
  constructor(
    private compraVentaService: CompraVentaService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }

  /**
   * The list of compraVentas.
   */
  @Input() compraVentas: CompraVenta[];

  /**
   * Shows or hides the create component
   */
  @Input() showCreate: boolean;

  /**
   * Shows or hides the edit component.
   */
  showEdit: boolean;

  /**
   * The id of the editorial being edited.
   */
  compraVentaId: number;

    /**
   * Compraventa seleccionado
   */
  selectedCompraVentaVenta: CompraVenta;

  /**
   * Asks the service to update the list of compraVentas
   */
  getCompraVentas(): void {
    this.compraVentaService.getCompraVentas()
        .subscribe(lasCompraVentas => {
            this.compraVentas = lasCompraVentas;
        });
}

    /**
     * Obtiene el detail de una compraVenta
     */
    getCompraVentaDetail(): void
    {
      this.compraVentaService.getCompraVentaDetail(this.compraVentaId).subscribe(selectedCVenta => { this.selectedCompraVentaVenta = selectedCVenta});
    }

  /**
   * Metodo que
   * @param compraVenta_id 
   */
  onSelected(compraVenta_id: number): void
  {
    this.showCreate = false; 
    this.compraVentaId = compraVenta_id;
    this.selectedCompraVentaVenta = new CompraVentaDetail();
    this.getCompraVentaDetail();
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
  }

  /**
   *Shows or hides the create component
   */
  showHideEdit(compraVenta_id: number): void {
    if (!this.showEdit || (this.showEdit && compraVenta_id != this.compraVentaId)) {
        this.showCreate = false;
        this.showEdit = true;
        this.compraVentaId = compraVenta_id;
    }
    else {
        this.showEdit = false;
    }
  }

  updateEditorial(): void {
    this.showEdit = false;
  }

  /**
   *This will initialize the component by retrieving the list of compraVentas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = true;
    this.showEdit = false;
    this.getCompraVentas();
   }
}
