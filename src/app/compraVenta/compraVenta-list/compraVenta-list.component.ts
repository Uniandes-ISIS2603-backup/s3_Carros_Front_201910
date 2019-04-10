import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompraVentaService } from '../compraVenta.service';
import { CompraVenta } from '../compraVenta';

@Component({
  selector: 'app-compraVenta-list',
  templateUrl: './compraVenta-list.component.html',
  styleUrls: ['./compraVenta-list.component.css']
})
export class CompraVentaListComponent implements OnInit {
  
  constructor(private compraVentaService: CompraVentaService, private router: Router) { }

  compraVentas : CompraVenta[];

  getCompraVentas(): void{
    this.compraVentaService.getCompraVentas().subscribe(lasCompraVentas => this.compraVentas = lasCompraVentas);
  }
  
  ngOnInit() {
    this.getCompraVentas();
  }

}