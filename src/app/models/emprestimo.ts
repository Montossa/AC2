export interface Emprestimo {
  id: number;
  nomePessoa: string;
  tituloLivro: string;
  dataPrevistaDevolucao: string;
  devolvido: boolean;
}

export type NovoEmprestimo = Omit<Emprestimo, 'id' | 'devolvido'>;