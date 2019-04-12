import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuejasService } from '../quejas.service';
import { QuejasReclamos } from '../quejas-reclamos';
import { QuejasDetail } from '../quejas-detail';

@Component({
  selector: 'app-quejas-list',
  templateUrl: './quejas-list.component.html',
  styleUrls: ['./quejas-list.component.css']
})
export class QuejasListComponent implements OnInit {

  showCreate: boolean;
  showEdit: boolean;
  showView: boolean;
  @Input() quejas: QuejasReclamos[];
  queja_id: number;
  selectedQueja: QuejasDetail;
  
  constructor(private quejasService: QuejasService, private router: Router) { }

  getQuejasDetail(): void
  {
    this.quejasService.getQuejasDetail(this.queja_id).subscribe(selectedQueja => { this.selectedQueja = selectedQueja});
  }
  
  getQuejas(): void{
    this.quejasService.getQuejas().subscribe(quejas => this.quejas = quejas);
  }

  onSelected(queja_id: number): void {
    console.log(this.queja_id);
    console.log(queja_id);
    this.queja_id = queja_id;
    this.selectedQueja = new QuejasDetail();
    this.quejasService.getQuejasDetail(queja_id).subscribe(o => this.selectedQueja = o);
  }
  
  showHideCreate(): void {
        if (this.selectedQueja) {
            this.selectedQueja = undefined;
            this.queja_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

  showHideEdit(queja_id: number): void {
        if (!this.showEdit || (this.showEdit && queja_id != this.selectedQueja.casoId)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.queja_id = queja_id;
            this.selectedQueja = new QuejasDetail();
            this.getQuejasDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }
  
  ngOnInit() {
    this.showCreate = false;
    this.selectedQueja = undefined;
    this.queja_id = undefined;
    this.getQuejas();
  }

  

}