import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoEmprestimo } from '../../models/emprestimo';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {
  @Output() cadastrar = new EventEmitter<NovoEmprestimo>();

  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  salvar(): void {
    const nome = this.nomePessoa.trim();
    const titulo = this.tituloLivro.trim();

    if (!nome || !titulo || !this.dataPrevistaDevolucao) {
      return;
    }

    this.cadastrar.emit({
      nomePessoa: nome,
      tituloLivro: titulo,
      dataPrevistaDevolucao: this.dataPrevistaDevolucao
    });

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
  }
}