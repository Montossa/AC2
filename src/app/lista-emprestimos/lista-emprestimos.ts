import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Emprestimo } from '../../models/emprestimo';

@Component({
  selector: 'app-lista-emprestimos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimos {
  @Input() emprestimos: Emprestimo[] = [];

  @Output() remover = new EventEmitter<number>();
  @Output() devolver = new EventEmitter<number>();

  get total(): number {
    return this.emprestimos.length;
  }

  get emAberto(): number {
    return this.emprestimos.filter(
      item => !item.devolvido
    ).length;
  }

  get devolvidos(): number {
    return this.emprestimos.filter(
      item => item.devolvido
    ).length;
  }
}