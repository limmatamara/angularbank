import { Component } from '@angular/core';
import { TransferenciasService } from './transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto01';
 
  constructor(private service: TransferenciasService) {}
}
