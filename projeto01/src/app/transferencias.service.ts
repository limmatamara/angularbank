import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Transferencia } from './models/transferencias.model';

@Injectable({
  providedIn: 'root'
})

export class TransferenciasService {
  private listaDeTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaDeTransferencia = [];
  }

  get transferencias() {
    return this.listaDeTransferencia;
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia) {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}