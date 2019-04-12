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

  showCreate: boolean;


  getClientes(): void{
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  ngOnInit() {
    this.showCreate = false;
    this.getClientes();
  }

}
