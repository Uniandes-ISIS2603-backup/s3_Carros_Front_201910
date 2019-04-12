import { Component, OnInit, Input } from '@angular/core';
import {Marca} from '../marca';
import {MarcaService} from '../marca.service';
import {MarcaDetail} from '../marca-detail';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  constructor(private marcaService: MarcaService) { }

  @Input() marcas: Marca[];

  showView: boolean; 

  showCreate: boolean; 

  slectedMarca: Marca;

  marca_id: number; 

  onSelected(marca_id: number): void
  {
    this.showCreate = false; 
    this.marca_id = marca_id;
    this.slectedMarca = new MarcaDetail();
    this.getMarcaDetail();
  }

  showHideCreate(): void {
    if (this.slectedMarca) {
        this.slectedMarca = undefined;
        this.marca_id = undefined;
    }
    this.showCreate = !this.showCreate;
}


  getMarcas(): void
  {
    this.marcaService.getMarcas().subscribe(marca => this.marcas = marca);
  }

  getMarcaDetail(): void
  {
    this.marcaService.getMarcasDetail(this.marca_id).subscribe(seleccio => 
      {
        this.slectedMarca = seleccio
    });
  }


  ngOnInit() {
    this.showCreate= false; 
    this.slectedMarca= undefined;
    this.marca_id = undefined;
    this.getMarcas();
  }

}