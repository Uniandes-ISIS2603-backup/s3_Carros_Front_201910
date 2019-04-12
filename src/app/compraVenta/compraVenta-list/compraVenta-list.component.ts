import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompraVentaService } from '../compraVenta.service';
import { CompraVenta } from '../compraVenta';
import { CompraVentaDetailComponent } from '../compraVenta-detail/compraVenta-detail.component';
import { CompraVentaDetail } from '../compraVenta-detail';

@Component({
  selector: 'app-compraVenta-list',
  templateUrl: './compraVenta-list.component.html',
})
export class CompraVentaListComponent implements OnInit {
  
  constructor(private compraVentaService: CompraVentaService, private router: Router) { }

  compraVenta_ID: number;
  selectedCompraVenta: CompraVentaDetail;

  @Input() compraVentas : CompraVenta[];

  getCompraVentas(): void{
    this.compraVentaService.getCompraVentas().subscribe(lasCompraVentas => this.compraVentas = lasCompraVentas);
  }
  
  onSelected(compraVenta_id: number): void {
    this.compraVenta_ID = compraVenta_id;
    this.selectedCompraVenta = new CompraVentaDetail();
    this.compraVentaService.getCompraVentaDetail(compraVenta_id).subscribe(o => this.selectedCompraVenta = o);
  }

  ngOnInit() {
    this.getCompraVentas();
  }

}