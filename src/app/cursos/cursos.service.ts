import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  consultaCursos(): any {
    return this.http.get<Curso[]>(AppSettings.API_ADDRESS + '/cursos');
  }

  excluir(id: number): any {
    return this.http.delete(AppSettings.API_ADDRESS + '/cursos/' + id);
  }

  getCursoById(id: number): any {
    return this.http.get<Curso>(AppSettings.API_ADDRESS + '/cursos/' + id);
  }
}
