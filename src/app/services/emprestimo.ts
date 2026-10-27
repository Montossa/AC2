import { Injectable } from '@angular/core';
import { Emprestimo, NovoEmprestimo } from '../models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private emprestimos: Emprestimo[] = [];
  private proximoId = 1;

  listar(): Emprestimo[] {
    return [...this.emprestimos];
  }

  adicionar(dados: NovoEmprestimo): void {
    const novo: Emprestimo = {
      id: this.proximoId++,
      nomePessoa: dados.nomePessoa.trim(),
      tituloLivro: dados.tituloLivro.trim(),
      dataPrevistaDevolucao: dados.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimos.push(novo);
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(
      emprestimo => emprestimo.id !== id
    );
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(
      item => item.id === id
    );

    if (emprestimo && !emprestimo.devolvido) {
      emprestimo.devolvido = true;
    }
  }
}