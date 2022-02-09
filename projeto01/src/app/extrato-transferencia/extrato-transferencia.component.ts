import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';
import { TransferenciasService } from '../transferencias.service';

@Component({
  selector: 'app-extrato-transferencia',
  templateUrl: './extrato-transferencia.component.html',
  styleUrls: ['./extrato-transferencia.component.css']
})
export class ExtratoTransferenciaComponent implements OnInit {
  
  transferencias: any = [];
 
  constructor(private service: TransferenciasService) { }

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
     console.log(transferencias);
     this.transferencias = transferencias; 
    })
  }

}
