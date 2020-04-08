import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore: AngularFirestore) {

  }

  createCliente(cliente: Cliente) {
    const param = JSON.parse(JSON.stringify(cliente));
    return this.firestore.collection('cliente').add(param);
  }
}
