import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {CompraVentaService} from '../compraVenta.service';
import {CompraVentaDetail} from '../compraVenta-detail';

@Component({
  selector: 'app-compraVenta-edit',
  templateUrl: './compraVenta-edit.component.html',
  styleUrls: ['./compraVenta-edit.component.css']
})
export class CompraVentaEditComponent implements OnInit {

  /**
   * The component's constructor
   * @param compraVentaService The compraVenta's service
   * @param toastrService The toastr to show messages to the user 
   */
  constructor(
    private compraVentaService: CompraVentaService,
    private toastrService: ToastrService
  ) { }

  /**
   * The id of the compraVenta that the user wants to edit
   * This is passed as a parameter by the parent component
   */
  @Input() VentaID: number;

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an compraVenta
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user updated a new editorial
   */
  @Output() update = new EventEmitter();

  /**
   * The compraVenta to edit
   */
  @Input() compraVenta: CompraVentaDetail;

  /**
   * Retrieves the information of the editorial
   */
  getCompraVenta(): void 
  {
    this.compraVentaService.getCompraVentaDetail(this.VentaID)
        .subscribe(laCompraVenta => {
            this.compraVenta = laCompraVenta;
        });
  }

  /**
   * Updates the compraVenta's information
   */
  editCompraVenta(): void 
  {
    this.compraVentaService.updateCompraVenta(this.compraVenta)
        .subscribe(() => 
        {
            this.update.emit();
            this.toastrService.success("The compraVenta's information was updated", "CompraVenta edition");
        });
  }

  /**
   * Informs the parent component that the user no longer wants to update the compraVenta
   */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
   * The function which initializes the component
   */
  ngOnInit() {
    this.compraVenta = new CompraVentaDetail();
    this.getCompraVenta();
  }

  /**
   * The function which is called every time the user chooses to edit a different compraVenta
   */
  ngOnChanges() {
    this.ngOnInit();
  }

}
