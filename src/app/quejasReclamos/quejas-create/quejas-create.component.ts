import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {QuejasService } from '../quejas.service';
import { QuejasReclamos } from '../quejas-reclamos';

@Component({
  selector: 'app-quejas-create',
  templateUrl: './quejas-create.component.html',
  styleUrls: ['./quejas-create.component.css'],
  providers: [DatePipe]
})
export class QuejasCreateComponent implements OnInit {

  constructor(
       private dp : DatePipe,
        private quejaService: QuejasService,
        private toastrService: ToastrService
  ) { }

  queja: QuejasReclamos;

  @Output() create = new EventEmitter();
  @Output() cancel = new EventEmitter();

  createQueja(): QuejasReclamos
  {
    this.quejaService.createQueja(this.queja).subscribe((queja)=>
    { 
      this.queja = queja; 
      this.create.emit();
      this.toastrService.success("La queja fue creada","Creacion Queja");

    });
    return this.queja
  }
  ngOnInit() {
    this.queja = new QuejasReclamos();
  }

}