import { Component, OnInit } from '@angular/core';
import {PuntoVenta} from '../punto-venta';
import {PuntoVentaService} from '../punto-venta.service';

@Component({
  selector: 'app-punto-venta-list',
  templateUrl: './punto-venta-list.component.html',
  styleUrls: ['./punto-venta-list.component.css']
})
export class PuntoVentaListComponent implements OnInit {

  constructor(private puntoVentaService: PuntoVentaService) { }
//

  puntosVenta: PuntoVenta[];

  getPuntosVenta(): void
  {
    this.puntoVentaService.getPuntosVenta().subscribe(puntosVenta => this.puntosVenta = puntosVenta);
  }

  ngOnInit() {
    this.getPuntosVenta();
  }

}