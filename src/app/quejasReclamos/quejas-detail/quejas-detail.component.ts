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

  constructor(
    private quejasService: QuejasService,
    private route: ActivatedRoute
  ) { }

  quejasDetail: QuejasDetail;

  @Input() quejaId : number;

  loader: any;

  getQuejasDetail(): void {
    this.quejasService.getQuejasDetail(this.quejaId)
      .subscribe(o => {
        this.quejasDetail = o
      });
  }

  onLoad(params) {

    this.quejaId = parseInt(params['id']);
    console.log(" en detail " + this.quejaId);
    this.quejasDetail = new QuejasDetail();
    this.getQuejasDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}