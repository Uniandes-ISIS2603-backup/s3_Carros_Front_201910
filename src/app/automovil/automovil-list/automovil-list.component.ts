import { Component, OnInit,Input } from '@angular/core';
import {Automovil} from '../automovil';
import {AutomovilService} from '../automovil.service';

@Component({
  selector: 'app-automovil-list',
  templateUrl: './automovil-list.component.html',
  styleUrls: ['./automovil-list.component.css']
})
export class AutomovilListComponent implements OnInit {

  constructor(private autoService: AutomovilService) { }
//

  @Input() automoviles: Automovil[];
  
  showView: boolean; 

  showCreate: boolean; 

  selectedAuto: Automovil;

  auto_id: number; 
  
  

  getAutomoviless(): void
  {
    this.autoService.getAutomoviles().subscribe(auto => this.automoviles = auto);
  }
  
  onSelected(auto_id: number): void
  {
    this.showCreate = false; 
    this.auto_id = auto_id;
      this.selectedAuto = new Automovil();
      this.getAutomovilDetail();
  }
  
  
  showHideCreate(): void {
    if (this.selectedAuto) {
        this.selectedAuto = undefined;
        this.auto_id = undefined;
    }
    this.showCreate = !this.showCreate;
}

  
  
  getAutomovilDetail(): void
  {
      this.autoService.getAutomovilDetail(this.auto_id).subscribe(seleccio => 
      {
        this.selectedAuto = seleccio
    });
  }

  
  
  
  ngOnInit() {
    this.showCreate= false; 
    this.selectedAuto= undefined;
    this.auto_id = undefined;
      this.getAutomoviless();
  }

}