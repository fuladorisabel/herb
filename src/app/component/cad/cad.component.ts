import { Component } from '@angular/core';


@Component({
  selector: 'cad-component',
  templateUrl: 'cad.component.html'
})
export class CadComponent{
  nome: string ;
  email: string ;
  senha: number = 0;

verivicar() : void {
  alert ("cadastro realizado com sucesso");
 }
  }
