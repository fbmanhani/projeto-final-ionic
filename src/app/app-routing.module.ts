import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'cursos',
    children: [
      {
        path: '',
        loadChildren: './cursos/cursos.module#CursosPageModule'
      },
      {
        path: ':id',
        loadChildren: './cursos/curso-detalhar/curso-detalhar.module#CursoDetalharPageModule'
      }
    ]
  },
  {
    path: 'alunos',
    children: [
      {
        path: '',
        loadChildren: './alunos/alunos.module#AlunosPageModule'
      },
      {
        path: ':id',
        loadChildren: './alunos/aluno-detalhar/aluno-detalhar.module#AlunoDetalharPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
