import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Marca} from '../marca';
import {MarcaService} from '../marca.service';
import {MarcaDetail} from '../marca-detail';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit, OnChanges 
{

  @Input() marcas: Marca[];
  constructor(private marcaService: MarcaService, private route: ActivatedRoute) { }

  showView: boolean; 

  showCreate: boolean; 

  slectedMarca: Marca;

  marca_id: number; 

  allmarcas: string = 'no';

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
    //console.log("--------------");
    //this.route.queryParams.filter(params => params.allmarcas == 'yes').subscribe(params => {
      //      console.log(params);
        //    console.log("mkkkkkkkkkkkkkkkk!");
         //   this.allmarcas = params.allmarcas;
          //  console.log(this.allmarcas);
        //});
      //console.log("NO LLEGO DEPUES DEL ROUTE");
    /* if (this.allmarcas == 'yes') {
        console.log("allbooks");

        this.getMarcas();
        }
      */

     this.slectedMarca= undefined;
     this.marca_id = undefined;
     this.getMarcas();
    }

    ngOnChanges()
    {
      
    }
}