import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Emprestimo } from '../models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private emprestimos: Emprestimo[] = [];
  private contadorId = 1;

  private emprestimosSubject =
    new BehaviorSubject<Emprestimo[]>([]);

  listar(): Observable<Emprestimo[]> {
    return this.emprestimosSubject.asObservable();
  }

  adicionar(
    dados: Omit<Emprestimo, 'id' | 'devolvido'>
  ): void {
    const novoEmprestimo: Emprestimo = {
      id: this.contadorId++,
      nomePessoa: dados.nomePessoa,
      tituloLivro: dados.tituloLivro,
      dataPrevistaDevolucao: dados.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimos.push(novoEmprestimo);
    this.atualizarLista();
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(
      emprestimo => emprestimo.id !== id
    );

    this.atualizarLista();
  }

  registrarDevolucao(id: number): void {
    this.emprestimos = this.emprestimos.map(
      emprestimo =>
        emprestimo.id === id
          ? { ...emprestimo, devolvido: true }
          : emprestimo
    );

    this.atualizarLista();
  }

  private atualizarLista(): void {
    this.emprestimosSubject.next([...this.emprestimos]);
  }
}