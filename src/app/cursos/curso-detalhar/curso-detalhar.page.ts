import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';
import { AlertController } from '@ionic/angular';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-curso-detalhar',
  templateUrl: './curso-detalhar.page.html',
  styleUrls: ['./curso-detalhar.page.scss'],
})
export class CursoDetalharPage implements OnInit {
  curso: Curso;

  constructor(
    private rotaAtiva: ActivatedRoute,
    private cursosService: CursosService,
    private rotas: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(paramMap => {
      // Caso não seja o parametro esperado
      if (!paramMap.has('id')) {
        this.rotas.navigate(['/cursos']);
        return;
      }
      const id = paramMap.get('id');
      this.curso = this.cursosService.getCursoById(Number(id)).subscribe(
        data => {
          this.curso = data;
          if (!this.curso.id) {
            this.rotas.navigate(['/receitas']);
          }
        }
      );
    });
  }
}
