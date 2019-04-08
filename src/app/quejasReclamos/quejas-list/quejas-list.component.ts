import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuejasService } from '../quejas.service';
import { QuejasReclamos } from '../quejas-reclamos';

@Component({
  selector: 'app-quejas-list',
  templateUrl: './quejas-list.component.html',
  styleUrls: ['./quejas-list.component.css']
})
export class QuejasListComponent implements OnInit {

  quejas : QuejasReclamos[];
  
  constructor(private quejasService: QuejasService, private router: Router) { }

  getQuejas(): void{
    this.quejasService.getQuejas().subscribe(quejas => this.quejas = quejas);
  }
  
  ngOnInit() {
    this.getQuejas();
  }

}