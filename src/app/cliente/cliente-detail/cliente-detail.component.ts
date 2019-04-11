import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  clienteId : number;

  clienteDetail: ClienteDetail;

  getClienteDetail(): void{
    this.clienteService.getClienteDetail(this.clienteId).subscribe(clienteDetail => {
      this.clienteDetail = clienteDetail
    });
  }

  ngOnInit() {
    this.clienteId = +this.route.snapshot.paramMap.get('id');
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
  }

}
