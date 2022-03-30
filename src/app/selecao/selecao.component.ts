import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent {

  @Input() titulo: string = ''
  @Input() opcoes: string[] = []
  @Input() escolhaAte: number = 0

  opcoesSelecionadas: string[] = []

  marcaOuDesmarcaOpcao(opcao: string) {

    if (this.escolhaAte === 1) {
      this.opcoesSelecionadas = [opcao]
    } else {
      const indice =  this.opcoesSelecionadas.indexOf(opcao)

      if (indice === -1) {
        this.opcoesSelecionadas.push(opcao)
      } else {
        this.opcoesSelecionadas.splice(indice, 1)
      }

    }

  }

  opcaoSelecionada(opcao: string): boolean {
    return this.opcoesSelecionadas.indexOf(opcao) != -1;
  }

}
