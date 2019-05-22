import { Component, OnInit, Input } from '@angular/core';
import {Modelo} from '../modelo';
import {ModeloService} from '../modelo.service';
import {ModeloDetail} from '../modelo-detail';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.css']
})
export class ModeloListComponent implements OnInit {

  constructor(private modeloService: ModeloService) { }
//

 @Input() modelos: Modelo[];
 @Input() marcaId: string;
 
  showView: boolean; 

  showCreate: boolean; 

  selectedModelo: Modelo;

  modelo_id: number
  
  
  
  onSelected(modelo_id: number): void
  {
    this.showCreate = false; 
    this.modelo_id = modelo_id;
      this.selectedModelo = new ModeloDetail();
      this.getModeloDetail();
  }
  
  
  showHideCreate(): void {
    if (this.selectedModelo) {
        this.selectedModelo = undefined;
        this.modelo_id = undefined;
    }
    this.showCreate = !this.showCreate;
}
 

  getModelos(): void
  {
    this.modeloService.getModelosPorMarca(this.marcaId).subscribe(mode => this.modelos = mode);
  }
  
  
  getModeloDetail(): void
  {
      this.modeloService.getModeloDetail(this.modelo_id).subscribe(seleccio => 
      {
        this.selectedModelo = seleccio
    });
  }

  ngOnInit() {
    this.showCreate= false; 
    this.selectedModelo= undefined;
    this.modelo_id = undefined;
      this.getModelos();
  }

}