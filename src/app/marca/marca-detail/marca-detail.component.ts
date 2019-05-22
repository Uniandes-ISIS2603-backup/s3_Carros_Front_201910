import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {MarcaService} from '../marca.service';
import {MarcaDetail} from '../marca-detail'; 


@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  @Input() marcaDetail: MarcaDetail;

  constructor(
    private marcaService: MarcaService,
    private route: ActivatedRoute
  ) { }

  marca_id: number; 

  getMarcaDetail():void
  {
    this.marcaService.getMarcasDetail(this.marca_id).subscribe(obser => {
      this.marcaDetail=obser
    });
  }


  ngOnInit() 
  {
    this.marca_id =+ this.route.snapshot.paramMap.get('id');
    if(this.marca_id)
    {
      this.marcaDetail = new MarcaDetail();
      this.getMarcaDetail();
    }
  }

}