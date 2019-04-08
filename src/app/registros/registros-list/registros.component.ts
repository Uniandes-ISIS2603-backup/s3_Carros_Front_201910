import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../registros.service';
import { Router, RouterLink } from '@angular/router';
import { Registros } from '../registros';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosListComponent implements OnInit {

  constructor(private registrosService: RegistrosService, private router: Router) { }


  
  registros: Registros[];
  
  getRegistros(): void{
    this.registrosService.getRegistros().subscribe(registros => this.registros = registros);
  }
  
  ngOnInit() {
    this.getRegistros();
  }

}