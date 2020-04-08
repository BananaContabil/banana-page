import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: Cliente;

  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }

  create() {

    
    this.clienteService.createCliente(this.cliente);
  }

}
