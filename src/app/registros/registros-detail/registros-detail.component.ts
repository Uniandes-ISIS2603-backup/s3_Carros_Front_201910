import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RegistrosService } from '../registros.service';
import { Registros } from '../registros';
import { RegistrosDetail } from '../registros-detail';

@Component({
  selector: 'app-registros-detail',
  templateUrl: './registros-detail.component.html',
  styleUrls: ['./registros-detail.component.css']
})
export class RegistrosDetailComponent implements OnInit {

 constructor(
    private registroService: RegistrosService,
    private route: ActivatedRoute
  ) { }

  @Input() registroDetail: RegistrosDetail;

  registro_id: number;

  loader: any;

  getRegistroDetail(): void {
    this.registroService.getRegistrosDetail(this.registro_id)
      .subscribe(o => {
        this.registroDetail = o
      });
  }

  ngOnInit() {
    this.registro_id = +this.route.snapshot.paramMap.get('id');
    if (this.registro_id) {
      this.registroDetail = new RegistrosDetail();
      this.getRegistroDetail();
    }

  }

 

}