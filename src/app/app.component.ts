import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // importamos a diretiva FormsModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula12';

  desabilitado: boolean = false;

  imageUrl: String = "http://lorempixel.com.br/200/200";

  nome: String = "teste";


  isMouseOver: boolean = false;
  valorAtual: string = '';
  valorSalvo: string = '';

  botaoClicado() {
    alert('Botão clicado!');
    this.desabilitado = !this.desabilitado
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = event.key;
  }

  salvarValor(event: any) {
    this.valorSalvo = event;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
