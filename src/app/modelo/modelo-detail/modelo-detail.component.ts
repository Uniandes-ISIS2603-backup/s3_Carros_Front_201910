import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ModeloService } from '../modelo.service';
import { Modelo } from '../modelo';
import { ModeloDetail } from '../modelo-detail';



@Component({
  selector: 'app-modelo-detail',
  templateUrl: './modelo-detail.component.html',
  styleUrls: ['./modelo-detail.component.css']
})
export class ModeloDetailComponent implements OnInit {

  @Input() modeloDetail: ModeloDetail;

  constructor(
    private modeloService: ModeloService,
    private route: ActivatedRoute
  ) { }

  modelo_id: number;

  getModeloDetail(): void
  {
    this.modeloService.getModeloDetail(this.modelo_id).subscribe(obser => {this.modeloDetail = obser });
  }



  ngOnInit() 
  {
      this.modelo_id = +this.route.snapshot.paramMap.get('modeloId');
        if (this.modelo_id){
        this.modeloDetail = new ModeloDetail();
        this.getModeloDetail();    
        }
  }

}