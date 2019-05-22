import {Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AutomovilService } from '../automovil.service';
import { Automovil } from '../automovil';
import { PuntoVentaService } from '../../punto-venta/punto-venta.service';
import { PuntoVenta } from '../../punto-venta/punto-venta';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-automovil-detail',
  templateUrl: './automovil-detail.component.html',
  styleUrls: ['./automovil-detail.component.css'],
  providers:[DatePipe]
})
export class AutomovilDetailComponent implements OnInit {

  @Input() automovil: Automovil;
  
  constructor(
    private autoService: AutomovilService,
    private route: ActivatedRoute,
    private pvService: PuntoVentaService
  ) { }

  auto_id: number;
  pv: PuntoVenta;

  showBuy: boolean;
  showLogin: boolean;

  showHideBuy():void{
    var rol = localStorage.getItem('role');
    console.log(rol);
    if(rol == null){
      this.showLogin = !this.showLogin;
    }
    else{
      this.showBuy = !this.showBuy;
    }
  }

  
  getPuntoVenta():void{
    this.pvService.getPuntoVentaDetail(this.automovil.puntoVentaID).subscribe(obser => {
      this.pv = obser
    });
  }

  getAutomovil(): void
  {
      this.autoService.getAutomovilDetail(this.auto_id).subscribe(obser => {this.automovil = obser });
  }



  ngOnInit() 
  {
    this.showBuy = false;
    this.showLogin = false;
    this.auto_id = +this.route.snapshot.paramMap.get('id');
    console.log(this.auto_id);
    this.automovil = new Automovil();
    this.getAutomovil();
    this.pv = new PuntoVenta();
    console.log("Entre pv");
    console.log(this.automovil.puntoVentaID);
    this.getPuntoVenta(); 
    console.log(this.pv);    
  }
}
