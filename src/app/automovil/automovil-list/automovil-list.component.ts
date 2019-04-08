import { Component, OnInit } from '@angular/core';
import {Automovil} from '../automovil';
import {AutomovilService} from '../automovil.service';

@Component({
  selector: 'app-automovil-list',
  templateUrl: './automovil-list.component.html',
  styleUrls: ['./automovil-list.component.css']
})
export class AutomovilListComponent implements OnInit {

  constructor(private marcaService: AutomovilService) { }
//

  automoviles: Automovil[];

  getAutomoviless(): void
  {
    this.marcaService.getAutomoviles().subscribe(auto => this.automoviles = auto);
  }

  ngOnInit() {
    this.getAutomoviless();
  }

}