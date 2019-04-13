import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit, OnChanges {

  constructor(private clienteService: ClienteService,
    private toastrService: ToastrService) { }

  @Input() cliente: ClienteDetail;
  @Input() cliente_id: number;
  
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  editCliente(): void{
    this.clienteService.updateCliente(this.cliente).subscribe(() => {
      this.toastrService.success("La información del cliente ha sido actualizada", "Edición de Cliente");
    });
    this.update.emit();
  }

  getCLiente(): void{
    this.clienteService.getClienteDetail(this.cliente_id).subscribe(cliente => {
      this.cliente = cliente;
    });
  }
  
  cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.cliente = new ClienteDetail();
    this.getCLiente();
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
