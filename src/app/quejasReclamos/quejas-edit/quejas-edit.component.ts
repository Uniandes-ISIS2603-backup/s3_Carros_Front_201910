import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {QuejasService} from '../quejas.service';
import {QuejasDetail} from '../quejas-detail';

@Component({
  selector: 'app-quejas-edit',
  templateUrl: './quejas-edit.component.html',
  styleUrls: ['./quejas-edit.component.css']
})
export class QuejasEditComponent implements OnInit {

  constructor(
        private quejaService: QuejasService,
        private toastrService: ToastrService
    ) {}

  @Input() queja_id: number;

  @Input() queja: QuejasDetail; 

  @Output() cancel = new EventEmitter();

  @Output() update = new EventEmitter();

   

  getQueja(): void {
        this.quejaService.getQuejasDetail(this.queja_id)
            .subscribe(queja => {
                this.queja = queja;
            });
    }
  
  editQueja(): void {
        this.quejaService.updateQueja(this.queja)
            .subscribe(() => {
                this.toastrService.success("La información de la queja fue editada", "Modificar estado de la queja");
            })
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

   ngOnInit() {
        this.queja = new QuejasDetail();
        this.getQueja();
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}