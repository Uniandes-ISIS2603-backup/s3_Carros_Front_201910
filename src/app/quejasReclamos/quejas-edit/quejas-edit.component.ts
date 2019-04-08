import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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

  @Input() quejaId: number;

  @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();

    queja: QuejasDetail;

  getQueja(): void {
        this.quejaService.getQuejasDetail(this.quejaId)
            .subscribe(queja => {
                this.queja = queja;
            });
    }
  
  editQueja(): void {
        this.quejaService.updateQueja(this.queja)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información de la queja fue editada", "Modificar estado de la queja");
            });
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