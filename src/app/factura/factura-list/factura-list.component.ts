import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import { Factura } from '../factura';
import { FacturaService } from '../factura.service';

/**
* The component for the list of facturas.
*/
@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param facturaService The author's services provider
   */
  constructor(
    private facturaService: FacturaService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  /**
   * The list of facturas.
   */
  @Input() facturas: Factura[];

  /**
   * Shows or hides the create component
   */
  showCreate: boolean;

  /**
   * Shows or hides the edit component.
   */
  showEdit: boolean;

  /**
   * The id of the factura being edited.
   */
  facturaID: number;

  /**
   * Asks the service to update the list of facturas
   */
  getFacturas(): void {
    this.facturaService.getFacturas()
        .subscribe(lasFacturas => {
            this.facturas = lasFacturas;
        });
}

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
  }

  /**
   * This will initialize the component by retrieving the list of facturas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.getFacturas();
   }
}
