import {Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { AutomovilService } from '../automovil.service';
import { Automovil } from '../automovil';



@Component({
  selector: 'app-automovil-detail',
  templateUrl: './automovil-detail.component.html',
  styleUrls: ['./automovil-detail.component.css'],
  providers:[DatePipe]
})
export class AutomovilDetailComponent implements OnInit {

  @Input() automovil: Automovil;
  
  constructor(
    private autoService: AutomovilService,
    private route: ActivatedRoute
  ) { }

  auto_id: number;
  
  

  getAutomovil(): void
  {
      this.autoService.getAutomovilDetail(this.auto_id).subscribe(obser => {this.automovil = obser });
  }



  ngOnInit() 
  {
      this.auto_id = +this.route.snapshot.paramMap.get('autoID');
        if (this.auto_id){
            this.automovil = new Automovil();
            this.getAutomovil();    
        }
  }

}
