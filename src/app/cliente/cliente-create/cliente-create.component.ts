import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(private clienteService: ClienteService, private toastrService: ToastrService) { }

  clienteNuevo: Cliente;
  
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createCliente(): Cliente{
    console.log(this.clienteNuevo);
    this.clienteService.createCliente(this.clienteNuevo).subscribe((cliente) => {
      this.clienteNuevo = cliente;
      this.create.emit();
      this.toastrService.success("El cliente fue creado", "Creación Cliente");
    });
    return this.clienteNuevo;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.clienteNuevo = new Cliente();
  }

}
