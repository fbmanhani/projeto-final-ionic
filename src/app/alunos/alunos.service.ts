import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './aluno.model';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  consultaTodos(): any {
    return this.http.get<Aluno[]>(AppSettings.API_ADDRESS + '/alunos');
  }

  excluir(id: number): any {
    return this.http.delete(AppSettings.API_ADDRESS + '/alunos/' + id);
  }

  getById(id: number): any {
    return this.http.get<Aluno>(AppSettings.API_ADDRESS + '/alunos/' + id);
  }

}
