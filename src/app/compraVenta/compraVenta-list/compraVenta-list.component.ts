import { Component, OnInit } from '@angular/core';
import {CompraVenta} from '../compraVenta';
import {CompraVentaService} from '../compraVenta.service';

@Component({
  selector: 'app-compraVenta-list',
  templateUrl: './compraVenta-list.component.html',
  styleUrls: ['./compraVenta-list.component.css']
})
export class CompraVentaListComponent implements OnInit {

  constructor(private compraVentaService: CompraVentaService) { }
//

  compraVentas: CompraVenta[];

  getCompraVentas(): void
  {
    this.compraVentaService.getCompraVentas().subscribe(lasCompraVentas => this.compraVentas = lasCompraVentas);
  }

  ngOnInit() {
    this.getCompraVentas();
  }

}