import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetailComponent } from '../cliente-detail/cliente-detail.component';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  @Input() clientes: Cliente[];
  cliente_id: number;

  showCreate: boolean;
  showEdit: boolean;

  selectedCliente: ClienteDetail;


  getClientes(): void{
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  showHideEdit(cliente_id: number): void{
    if (!this.showEdit || (this.showEdit && cliente_id != this.selectedCliente.clienteID)) {
      this.showCreate = false;
      this.showEdit = true;
      this.cliente_id = cliente_id;
      this.selectedCliente   = new ClienteDetail();
      this.getClienteDetail();
    }
    else {
      this.showEdit = false;
    }
  }

  updateCliente(): void{
    this.showEdit = false;
  }

  getClienteDetail(): void{
    this.clienteService.getClienteDetail(this.cliente_id).subscribe(selectedCliente => {
      this.selectedCliente = selectedCliente;
    });
  }

  
  ngOnInit() {
    this.showCreate = false;
    this.getClientes();
  }

}
