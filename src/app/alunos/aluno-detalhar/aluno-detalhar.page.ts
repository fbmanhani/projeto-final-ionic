import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { AlertController } from '@ionic/angular';
import { CursosService } from 'src/app/cursos/cursos.service';

@Component({
  selector: 'app-aluno-detalhar',
  templateUrl: './aluno-detalhar.page.html',
  styleUrls: ['./aluno-detalhar.page.scss'],
})
export class AlunoDetalharPage implements OnInit {

  aluno: Aluno;

  constructor(
    private rotaAtiva: ActivatedRoute,
    private service: AlunosService,
    private cursosService: CursosService,
    private rotas: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(paramMap => {
      // Caso não seja o parametro esperado
      if (!paramMap.has('id')) {
        this.rotas.navigate(['/alunos']);
        return;
      }
      const id = paramMap.get('id');
      this.service.getById(Number(id)).subscribe(
        data => {
          this.aluno = data;
          this.recuperaCurso(this.aluno.cursoId);
          if (!this.aluno.id) {
            this.rotas.navigate(['/receitas']);
          }
        }
      );
    });
  }

  recuperaCurso(idCurso) {
    this.cursosService.getCursoById(idCurso).subscribe(
      data => {
        this.aluno.curso = data;
      }
    );
  }


}
