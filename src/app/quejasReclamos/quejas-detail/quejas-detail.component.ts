import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QuejasService } from '../quejas.service';
import { QuejasReclamos } from '../quejas-reclamos';
import { QuejasDetail } from '../quejas-detail';

@Component({
  selector: 'app-quejas-detail',
  templateUrl: './quejas-detail.component.html',
  styleUrls: ['./quejas-detail.component.css']
})
export class QuejasDetailComponent implements OnInit {

  @Input() quejasDetail: QuejasDetail;
  
  constructor(
    private quejasService: QuejasService,
    private route: ActivatedRoute
  ) { }

  

  queja_id : number;

  loader: any;

  getQuejasDetail(): void {
    this.quejasService.getQuejasDetail(this.queja_id)
      .subscribe(o => {
        this.quejasDetail = o
      });
  }

  ngOnInit() {
    this.queja_id = +this.route.snapshot.paramMap.get('id');
    if (this.queja_id) {
      this.quejasDetail = new QuejasDetail();
      this.getQuejasDetail();
    }

  }

  

}