import { Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencias.model';
import { TransferenciasService } from '../transferencias.service';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router) {}

  transferir () {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }; 
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.log(error))    
  }  

  limparCampos () {
    this.valor = 0;
    this.destino = 0;
  }
}
